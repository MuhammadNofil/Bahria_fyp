const forgetRouter = require("express").Router();
const forgetPassController = require("../../controllers/ForgetPassword/forgetpass.controller");

forgetRouter.post("/forgetpassoword", forgetPassController.SendRestLink);
forgetRouter.get(
  "/forgetpass/:id/:token",
  forgetPassController.VerifyUserBeforeReset
);
forgetRouter.post("/:id/:token", forgetPassController.NewPassword);

module.exports = forgetRouter;
