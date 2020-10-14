const tasksRepo = require('./task.memory.repository');

const getAllTasksByBoardId = boardId => tasksRepo.getAllTasksByBoardId(boardId);

const getTaskByBoardIdAndTaskId = taskData =>
  tasksRepo.getTaskByBoardIdAndTaskId(taskData);

const createTask = taskData => tasksRepo.createTask(taskData);

const updateTask = taskData => tasksRepo.updateTask(taskData);

const deleteTask = taskData => tasksRepo.deleteTask(taskData);

module.exports = {
  getAllTasksByBoardId,
  getTaskByBoardIdAndTaskId,
  createTask,
  updateTask,
  deleteTask
};
