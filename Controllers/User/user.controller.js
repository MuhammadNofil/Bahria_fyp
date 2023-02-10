const {
  Register,
  UpdateOccupation,
  getall,
  update,
} = require("../../Services/User/user.service");
const responses = require("../../Responses/response");

const create = async (req, res, next) => {
  try {
    const user = await Register(req.body);
    if (!user) {
      res.send(responses.genericResponse(500, false, responses.FAILED));
      return;
    }
    res.send(
      responses.genericResponse(200, true, { user }, null, responses.SUCCESS)
    );
  } catch (error) {
    next(error);
  }
};

const Updateoccupation = async (req, res, next) => {
  try {
    const user = await UpdateOccupation(req.body, req.query);
    if (!user) {
      res.send(responses.genericResponse(500, false, responses.FAILED));
      return;
    }
    res.send(
      responses.genericResponse(200, true, { user }, null, responses.SUCCESS)
    );
  } catch (error) {
    next(error);
  }
};
const Update = async (req, res, next) => {
  try {
    const user = await update(req.body, req.query);
    if (!user) {
      res.send(responses.genericResponse(500, false, responses.FAILED));
      return;
    }
    res.send(
      responses.genericResponse(200, true, { user }, null, responses.SUCCESS)
    );
  } catch (error) {
    next(error);
  }
};
const get = async (req, res, next) => {
  try {
    const user = await getall();
    if (!user) {
      res.send(responses.genericResponse(500, false, responses.FAILED));
      return;
    }
    res.send(
      responses.genericResponse(200, true, user, null, responses.SUCCESS)
    );
  } catch (error) {
    next(error);
  }
};

module.exports = { create, Updateoccupation, get, Update };
