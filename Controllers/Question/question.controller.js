const QuestionServices = require("../../Services/Question/Question.service");
const responses = require("../../Responses/response");
const create = async (req, res) => {
  try {
    const textanswer = await QuestionServices.create(req.body);
    if (!textanswer) {
      res.send(responses.genericResponse(401, false, responses.FAILED));
      return;
    }
    res.send(
      responses.genericResponse(
        200,
        true,
        { textanswer },
        null,
        responses.SUCCESS
      )
    );
    return;
  } catch (error) {
    res.send(responses.genericResponse(500, false, responses.FAILED));
  }
};
const update = async (req, res) => {
  try {
    const question = await QuestionServices.update(req.body, req.params);
    if (!question) {
      res.send(responses.genericResponse(401, false, responses.FAILED));
      return;
    }
    res.send(
      responses.genericResponse(
        200,
        true,
        { question },
        null,
        responses.SUCCESS
      )
    );
    return;
  } catch (error) {
    res.send(responses.genericResponse(500, false, responses.FAILED));
  }
};
const getbyid = async (req, res) => {
  try {
    const question = await QuestionServices.getbyid(req.params);
    if (!question) {
      res.send(responses.genericResponse(401, false, responses.FAILED));
      return;
    }
    res.send(
      responses.genericResponse(
        200,
        true,
        { question },
        null,
        responses.SUCCESS
      )
    );
    return;
  } catch (error) {
    res.send(responses.genericResponse(500, false, responses.FAILED));
  }
};
const getall = async (req, res) => {
  try {
    const question = await QuestionServices.getall();
    if (!question) {
      res.send(responses.genericResponse(401, false, responses.FAILED));
      return;
    }
    res.send(
      responses.genericResponse(
        200,
        true,
        { question },
        null,
        responses.SUCCESS
      )
    );
    return;
  } catch (error) {
    res.send(responses.genericResponse(500, false, responses.FAILED));
  }
};
const Delete = async (req, res) => {
  try {
    const question = await QuestionServices.Delete(req.params);
    if (!question) {
      res.send(responses.genericResponse(401, false, responses.FAILED));
      return;
    }
    res.send(
      responses.genericResponse(
        200,
        true,
        { question },
        null,
        responses.SUCCESS
      )
    );
    return;
  } catch (error) {
    res.send(responses.genericResponse(500, false, responses.FAILED));
  }
};

module.exports = { create, update, getbyid, getall, Delete };
