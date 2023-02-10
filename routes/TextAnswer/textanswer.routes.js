const TextRouter = require("express").Router();
const TextController = require("../../Controllers/TextAnswer/textanswer.controller");
const {
  VerifyUser,
} = require("../../services/ForgetPassword/forgetpass.service");
TextRouter.post("/create/", TextController.create);
TextRouter.put("/update/:id", TextController.update);
TextRouter.put("/updatestar/:id", TextController.updatestars);
TextRouter.get("/getbyid/:id", TextController.getbyid);
TextRouter.get("/getall/", TextController.getall);
TextRouter.delete("/delete/:id", TextController.Delete);

module.exports = TextRouter;
