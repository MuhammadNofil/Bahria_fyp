const TextAnswer = require("../../Schema/TextAnswer/textanswer.schema");
const create = async (questionInfo) => {
  const { answer, questionId } = questionInfo;
  try {
    const textanswer = await TextAnswer.create({
      answer,
      questionId,
    });
    if (!textanswer) {
      return false;
    }
    return textanswer;
  } catch (error) {
    throw new Error();
  }
};
const update = async (questionInfo, param) => {
  const { answer } = questionInfo;
  const { id } = param;
  try {
    const textanswer = await TextAnswer.updateOne(
      { _id: id },
      {
        answer,
      }
    );
    if (!textanswer) {
      return false;
    }
    return true;
  } catch (error) {
    throw new Error();
  }
};
const updatestars = async (param) => {
  const { id } = param;
  try {
    const answer = await TextAnswer.findOneAndUpdate(
      { _id: id },
      { $inc: { stars: 1 } },
      { new: true }
    );
    if (!answer) {
      return false;
    }
    return true;
  } catch (error) {
    throw new Error();
  }
};
const getbyid = async (param) => {
  const { id } = param;
  console.log(param, "params");
  try {
    const textanswer = await TextAnswer.findOne({ _id: id });
    if (!textanswer) {
      return false;
    }
    return textanswer;
  } catch (error) {
    throw new Error();
  }
};
const getall = async () => {
  try {
    const answer = await TextAnswer.find();
    if (!answer) {
      return false;
    }
    return answer;
  } catch (error) {
    throw new Error();
  }
};
const Delete = async (param) => {
  const { id } = param;
  try {
    const answer = await TextAnswer.deleteOne({ _id: id });
    if (!answer) {
      return false;
    }
    return answer;
  } catch (error) {
    throw new Error();
  }
};

module.exports = { create, update, getbyid, Delete, getall, updatestars };
