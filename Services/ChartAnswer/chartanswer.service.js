const ChartAnswer = require("../../Schema/ChartAnswer/chartanswer.schema");
const create = async (questionInfo) => {
  const { title, chartdata, questionId } = questionInfo;
  try {
    const answer = await ChartAnswer.create({
      title,
      chartdata,
      questionId,
    });
    if (!answer) {
      return false;
    }
    return answer;
  } catch (error) {
    throw new Error();
  }
};
const update = async (questionInfo, param) => {
  const { title, chartdata } = questionInfo;
  const { id } = param;
  try {
    const textanswer = await ChartAnswer.updateOne(
      { _id: id },
      {
        title,
        chartdata,
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
const getbyid = async (param) => {
  const { id } = param;
  try {
    const textanswer = await ChartAnswer.findOne({ _id: id });
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
    const answer = await ChartAnswer.find();
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
    const answer = await ChartAnswer.deleteOne({ _id: id });
    if (!answer) {
      return false;
    }
    return answer;
  } catch (error) {
    throw new Error();
  }
};
const updatestars = async (param) => {
  const { id } = param;
  try {
    const answer = await ChartAnswer.findOneAndUpdate(
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

module.exports = { create, update, getbyid, Delete, getall, updatestars };
