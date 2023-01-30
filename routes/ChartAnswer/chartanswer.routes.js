const ChartRouter = require("express").Router();
const ChartController = require("../../Controllers/ChartAnswer/chartanswer.controller");

ChartRouter.post("/create/", ChartController.create);
ChartRouter.put("/update/:id", ChartController.update);
ChartRouter.put("/updatestar/:id", ChartController.updatestars);
ChartRouter.get("/getbyid/:id", ChartController.getbyid);
ChartRouter.get("/getall/", ChartController.getall);
ChartRouter.delete("/delete/:id", ChartController.Delete);

module.exports = ChartRouter;
