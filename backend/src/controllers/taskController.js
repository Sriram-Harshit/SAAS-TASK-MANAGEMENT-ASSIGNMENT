import Task from "../models/taskModel.js";

export const createTask = async (req, res, next) => {
  try {
    const { title } = req.body;

    const task = await Task.create({
      title,
      userId: req.user.id,
    });

    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

export const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.findAll({
      where: { userId: req.user.id },
      order: [["createdAt", "DESC"]],
    });

    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.id);

    if (!task || task.userId !== req.user.id) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.status = task.status === "Pending" ? "Completed" : "Pending";
    await task.save();

    res.json(task);
  } catch (err) {
    next(err);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.id);

    if (!task || task.userId !== req.user.id) {
      return res.status(404).json({ message: "Task not found" });
    }

    await task.destroy();
    res.json({ message: "Task deleted" });
  } catch (err) {
    next(err);
  }
};
