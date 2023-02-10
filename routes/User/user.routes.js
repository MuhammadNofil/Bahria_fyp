const UserRouter = require("express").Router();
const UserController = require("../../Controllers/User/user.controller");

UserRouter.post("/create/", UserController.create);
UserRouter.put("/updateoccupation/", UserController.Updateoccupation);
UserRouter.put("/update/", UserController.Update);
UserRouter.get("/getall/", UserController.get);

module.exports = UserRouter;
