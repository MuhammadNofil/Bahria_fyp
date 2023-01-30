const FlowchartRouter = require("express").Router();
const FlowChartController = require("../../Controllers/Flowchart/flowchart.controller");

FlowchartRouter.post("/create/", FlowChartController.create);
FlowchartRouter.put("/update/:id", FlowChartController.update);
FlowchartRouter.put("/updatestar/:id", FlowChartController.updatestars);
FlowchartRouter.get("/getbyid/:id", FlowChartController.getbyid);
FlowchartRouter.get("/getall/", FlowChartController.getall);
FlowchartRouter.delete("/delete/:id", FlowChartController.Delete);

module.exports = FlowchartRouter;
