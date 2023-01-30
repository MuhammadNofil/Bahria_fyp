const UserRouter = require("express").Router();
const UserController = require("../../Controllers/User/user.controller");

UserRouter.post("/create/", UserController.create);
UserRouter.put("/update/", UserController.update);

module.exports = UserRouter;
