const FlowChartService = require("../../Services/FlowChart/flowchart.service");
const responses = require("../../Responses/response");
const create = async (req, res) => {
  try {
    const answer = await FlowChartService.create(req.body);
    if (!answer) {
      res.send(responses.genericResponse(401, false, responses.FAILED));
      return;
    }
    res.send(
      responses.genericResponse(200, true, { answer }, null, responses.SUCCESS)
    );
    return;
  } catch (error) {
    res.send(responses.genericResponse(500, false, responses.FAILED));
  }
};
const update = async (req, res) => {
  try {
    const answer = await FlowChartService.update(req.body, req.params);
    if (!answer) {
      res.send(responses.genericResponse(401, false, responses.FAILED));
      return;
    }
    res.send(
      responses.genericResponse(200, true, { answer }, null, responses.SUCCESS)
    );
    return;
  } catch (error) {
    res.send(responses.genericResponse(500, false, responses.FAILED));
  }
};
const getbyid = async (req, res) => {
  try {
    const answer = await FlowChartService.getbyid(req.params);
    if (!answer) {
      res.send(responses.genericResponse(401, false, responses.FAILED));
      return;
    }
    res.send(
      responses.genericResponse(200, true, { answer }, null, responses.SUCCESS)
    );
    return;
  } catch (error) {
    res.send(responses.genericResponse(500, false, responses.FAILED));
  }
};
const getall = async (req, res) => {
  try {
    const answer = await FlowChartService.getall();
    if (!answer) {
      res.send(responses.genericResponse(401, false, responses.FAILED));
      return;
    }
    res.send(
      responses.genericResponse(200, true, { answer }, null, responses.SUCCESS)
    );
    return;
  } catch (error) {
    res.send(responses.genericResponse(500, false, responses.FAILED));
  }
};
const Delete = async (req, res) => {
  try {
    const answer = await FlowChartService.Delete(req.params);
    if (!answer) {
      res.send(responses.genericResponse(401, false, responses.FAILED));
      return;
    }
    res.send(
      responses.genericResponse(200, true, { answer }, null, responses.SUCCESS)
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

module.exports = { create, update, getbyid, getall, Delete, updatestars };
