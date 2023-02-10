const Question = require("../../Schema/Question/Question.schema");
const create = async (questionInfo, id) => {
  const { title, description, category } = questionInfo;
  console.log(id, questionInfo, "sasasas");
  try {
    const question = await Question.create({
      title,
      description,
      category,
      userId: id,
    });
    if (!question) {
      return false;
    }
    return question;
  } catch (error) {
    throw new Error();
  }
};
const update = async (questionInfo, param) => {
  const { title, description } = questionInfo;
  const { id } = param;
  try {
    const question = await Question.updateOne(
      { _id: id },
      {
        title,
        description,
      }
    );
    if (!question) {
      return false;
    }
    return question;
  } catch (error) {
    throw new Error();
  }
};
const getbyid = async (param) => {
  const { id } = param;
  try {
    const question = await Question.findOne({ _id: id }).populate("userId");
    if (!question) {
      return false;
    }
    return question;
  } catch (error) {
    throw new Error();
  }
};
const getall = async () => {
  try {
    const question = await Question.find().populate("userId");
    if (!question) {
      return false;
    }
    return question;
  } catch (error) {
    throw new Error();
  }
};
const Delete = async (param) => {
  const { id } = param;
  try {
    const question = await Question.deleteOne({ _id: id });
    if (!question) {
      return false;
    }
    return question;
  } catch (error) {
    throw new Error();
  }
};

module.exports = { create, update, getbyid, Delete, getall };
