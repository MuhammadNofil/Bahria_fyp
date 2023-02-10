const forgetPassowrdService = require("../../services/ForgetPassword/forgetpass.service");
const responses = require("../../Responses/response");
const SendRestLink = async (req, res, next) => {
  try {
    const reset = await forgetPassowrdService.forgetLink(req.body);
    console.log(reset, "daaadd");
    if (!reset) {
      res.send(
        responses.genericResponse(500, false, null, null, {
          message: responses.USERS_NOT_FOUND,
        })
      );
      return;
    }
    res.send(
      responses.genericResponse(
        201,
        true,
        null,
        null,
        responses.FORGET_EMAIL_SUCCESS
      )
    );
  } catch (error) {
    return responses.genericResponse(401, false, null, {
      message: responses.FAILED,
    });
  }
};
const VerifyUserBeforeReset = async (req, res) => {
  try {
    const reset = await forgetPassowrdService.VerifyUser(req.params);
    if (reset) {
      res.send(responses.genericResponse(201, true, reset, null));
      return;
    }
    res.send(responses.genericResponse(401, false, reset, null));
  } catch (error) {
    return responses.genericResponse(401, false, null, {
      message: responses.FAILED,
    });
  }
};
const NewPassword = async (req, res) => {
  console.log(req.params, "controller");
  console.log(req.body, "req.body");
  try {
    const forget = await forgetPassowrdService.ChangePassword(
      req.params,
      req.body
    );
    if (!forget) {
      res.send(responses.genericResponse(401, false, forget, null));
      return;
    }
    res.send(responses.genericResponse(201, true, forget, null));
  } catch (error) {
    return responses.genericResponse(500, false, null, {
      message: responses.FAILED,
    });
  }
};

module.exports = { SendRestLink, VerifyUserBeforeReset, NewPassword };
