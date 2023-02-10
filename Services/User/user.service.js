const User = require("../../Schema/User/user.schema");
const { hashedPassword } = require("../../middleware/middleware");

const Register = async (userInfo) => {
  const { name, email, password } = userInfo;
  const Password = await hashedPassword(password);
  try {
    const alreadyExists = await User.findOne({
      email: email,
    });
    if (alreadyExists) {
      return false;
    }
    const user = await User.create({
      name,
      email,
      password: Password,
    });
    if (!user) {
      return false;
    }
    return user;
  } catch (error) {
    console.log("error");
  }
};
const UpdateOccupation = async (userInfo, query) => {
  const { name, Skills, qualification, services, occupation } = userInfo;
  const { id } = query;
  console.log(userInfo, query);
  try {
    const user = await User.updateOne(
      { _id: id },
      {
        occupation,
      }
    );
    console.log("yaha hay may");
    if (!user) {
      return false;
    }
    console.log(user, "user");
    return user;
  } catch (error) {
    console.log("error");
  }
};
const update = async (userInfo, query) => {
  const { Skills, description, qualification, services, img } = userInfo;
  const { id } = query;
  console.log(userInfo, query);
  try {
    const user = await User.updateOne(
      { _id: id },
      {
        services,
        qualification,
        description,
        Skills,
        img,
      }
    );
    if (!user) {
      return false;
    }
    console.log(user, "user");
    return user;
  } catch (error) {
    console.log("yaha hay may");
    console.log("error");
  }
};
const getall = async (userInfo, query) => {
  try {
    const user = await User.find().populate({ path: "questions" });
    if (!user) {
      return false;
    }
    // await user.populate("questions");
    return user;
  } catch (error) {}
};
module.exports = { Register, UpdateOccupation, getall, update };
