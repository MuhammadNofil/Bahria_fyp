const TextAnswer = require("../../Services/TextAnswer/textanswer.service");
const responses = require("../../Responses/response");
const create = async (req, res) => {
  try {
    const question = await TextAnswer.create(req.body);
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
const update = async (req, res) => {
  try {
    const question = await TextAnswer.update(req.body, req.params);
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
const updatestars = async (req, res) => {
  try {
    const question = await TextAnswer.updatestars(req.params);
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
    const question = await TextAnswer.getbyid(req.params);
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
    const question = await TextAnswer.getall();
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
    const question = await TextAnswer.Delete(req.params);
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

module.exports = { create, update, getbyid, getall, Delete, updatestars };
