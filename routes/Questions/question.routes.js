const QuestionRouter = require("express").Router();
const QuestionController = require("../../Controllers/Question/question.controller");

QuestionRouter.post("/create/", QuestionController.create);
QuestionRouter.put("/update/:id", QuestionController.update);
QuestionRouter.get("/getbyid/:id", QuestionController.getbyid);
QuestionRouter.get("/getall/", QuestionController.getall);
QuestionRouter.delete("/delete/:id", QuestionController.Delete);

module.exports = QuestionRouter;
