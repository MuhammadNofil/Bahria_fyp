const forgetPassowrdService = require("../../services/ForgetPassword/forgetpass.service");

const SendRestLink = async (req, res, next) => {
  try {
    const reset = await forgetPassowrdService.forgetLink(req.body);
    if (!reset) {
      responses.genericResponse(500, false, null, {
        message: responses.USERS_NOT_FOUND,
      });
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
  try {
    await forgetPassowrdService.ChangePassword(req.params, req.body);
  } catch (error) {
    return responses.genericResponse(401, false, null, {
      message: responses.FAILED,
    });
  }
};

module.exports = { SendRestLink, VerifyUserBeforeReset, NewPassword };
