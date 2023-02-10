const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const hashedPassword = async (password) => {
  const newPassword = await bcrypt.hash(password, parseInt(process.env.SALT));
  return newPassword;
};

const comparePassword = async (password, passwordToCompareWith) => {
  const checkedpass = await bcrypt.compare(password, passwordToCompareWith);
  return checkedpass;
};

const token = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: process.env.SESSION_EXPIRY_LONG,
  });
};
const Refreshtoken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
  });
};
const COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: "None",
  secure: true,
  maxAge: 24 * 60 * 60 * 1000,
};
const verifyUser = passport.authenticate("jwt", {
  session: false,
});

module.exports = {
  hashedPassword,
  comparePassword,
  token,
  Refreshtoken,
  COOKIE_OPTIONS,
  verifyUser,
};
