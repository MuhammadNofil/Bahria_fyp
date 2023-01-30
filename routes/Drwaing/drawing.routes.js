const DrwaingRouter = require("express").Router();
const DrwaingController = require("../../Controllers/Drwaing/drawing.controller");

DrwaingRouter.post("/create/", DrwaingController.create);
DrwaingRouter.put("/update/:id", DrwaingController.update);
DrwaingRouter.put("/updatestar/:id", DrwaingController.updatestars);
DrwaingRouter.get("/getbyid/:id", DrwaingController.getbyid);
DrwaingRouter.get("/getall/", DrwaingController.getall);
DrwaingRouter.delete("/delete/:id", DrwaingController.Delete);

module.exports = DrwaingRouter;
