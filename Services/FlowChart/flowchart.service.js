const FlowChart = require("../../Schema/FlowChart/flowchart.schema");
const create = async (answerinfo) => {
  const { id, data, position, questionId } = answerinfo;
  try {
    const answer = await FlowChart.create({
      id,
      data,
      position,
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
const update = async (answerinfo, param) => {
  const { data, position } = answerinfo;
  const { id } = param;
  try {
    const textanswer = await FlowChart.updateOne(
      { _id: id },
      {
        data,
        position,
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
    const textanswer = await FlowChart.findOne({ _id: id });
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
    const answer = await FlowChart.find();
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
    const answer = await FlowChart.deleteOne({ _id: id });
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
    const answer = await FlowChart.findOneAndUpdate(
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
