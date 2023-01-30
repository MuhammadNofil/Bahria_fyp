const Drawing = require("../../Schema/Drwaing/drawing.schema");
const create = async (answerinfo) => {
  const { lines, text, position, questionId } = answerinfo;
  try {
    const answer = await Drawing.create({
      lines,
      text,
      shapes,
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
  const { lines, text, shapes } = answerinfo;
  const { id } = param;
  try {
    const textanswer = await Drawing.updateOne(
      { _id: id },
      {
        lines,
        text,
        shapes,
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
    const textanswer = await Drawing.findOne({ _id: id });
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
    const answer = await Drawing.find();
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
    const answer = await Drawing.deleteOne({ _id: id });
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
    const answer = await Drawing.findOneAndUpdate(
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
