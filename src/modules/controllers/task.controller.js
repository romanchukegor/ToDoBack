const Task = require("../../db/models/tasks/index");

const getAllTasks = async (req, res, next) => {
  try {
    const allTasks = await Task.find();
    res.status(200).send({ allTasks });
  } catch (error) {
    res.satus(400).send("an error occurred while trying to get data");
  }
};

const createNewTask = async (req, res) => {
  try {
    const text = req.body.text;
    const task = new Task({ text });
    const result = await task.save();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send("Task send error");
  }
};

const changeTaskInfo = async (req, res, next) => {
  try {
    const _id = req.params._id;
    const text = req.body.text;

    if (
      !req.params.hasOwnProperty("_id") ||
      _id === "" ||
      !req.body.hasOwnProperty("text") ||
      !validationString(text)
    ) {
      throw new Error();
    }
    const task = await Task.findOneAndUpdate(
      { _id },
      { $set: { text } },
      { new: true }
    );
    res.status(200).send(task);
  } catch (error) {
    res.status(400).send("Fail to change");
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const _id = req.params._id;
    if (!req.params.hasOwnProperty("_id") || _id === "") {
      throw new Error();
    }

    const deleteTask = await Task.deleteOne({ _id });
    res.status(200).send(deleteTask);
  } catch (error) {
    res.status(400).send("Failed delete task");
  }
};

const deleteAllTasks = async (req, res, next) => {
  try {
    await Task.deleteMany({});
    res.send("all tasks was deleted");
  } catch (error) {
    res.send("failed to delete");
  }
};

const changeCheckBoxTask = async (req, res, next) => {
  try {
    const _id = await req.params._id;
    const isCheck = await req.body.isCheck;

    if (
      !req.params.hasOwnProperty("_id") ||
      _id === "" ||
      !req.body.hasOwnProperty("isCheck") ||
      typeof isCheck !== "boolean"
    ) {
      throw new Error();
    }

    const task = await Task.findOneAndUpdate(
      { _id },
      { $set: { isCheck } },
      { new: true }
    );
    res.status(200).send(task);
  } catch (error) {
    res.status(400).send("Failed to change a task");
  }
};

module.exports = {
  createNewTask,
  getAllTasks,
  deleteTask,
  deleteAllTasks,
  changeTaskInfo,
  changeCheckBoxTask,
};
