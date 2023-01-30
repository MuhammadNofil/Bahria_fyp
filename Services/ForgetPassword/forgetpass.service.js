const User = require("../../Schema/User/user.schema");
const { transporter } = require("../../config/email.config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const forgetLink = async (userInfo) => {
  const { email } = userInfo;

  try {
    const user = await User.findOne({
      email: email,
    });

    if (!user) {
      return false;
    }
    const id = user.id;

    var token = jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: parseInt("120s"),
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Sending Email For password Reset",
      text: `This Link Valid For 2 MINUTES http://localhost:3000/forgetpass/${id}/${token}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return error;
      } else {
        return true;
      }
    });
    return true;
  } catch (error) {
    return await error;
  }
};

// VerifyUser for forget password time
const VerifyUser = async (resetData, req, res) => {
  const { token } = resetData;
  try {
    const verifyToken = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
    console.log(validuser, "101");
    if (!verifyToken) {
      return false;
    }
    return true;
  } catch (error) {
    return await error;
  }
};

// change password
const ChangePassword = async (resetData) => {
  const { id, token } = resetData;
  try {
    const verifyToken = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

    if (verifyToken) {
      const newpassword = await bcrypt.hash(req.newPassword, 10);
      const abc = await User.updateOne({ _id: id }, { password: newpassword });
      if (!abc) {
        return false;
      }
      return true;
    }
  } catch (error) {
    return await error;
  }
};

module.exports = {
  forgetLink,
  VerifyUser,
  ChangePassword,
};
