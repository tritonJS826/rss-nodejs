const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');
const { v4 } = require('uuid');

router.route('/:boardId/tasks').get(async (req, res) => {
  try {
    const { boardId } = req.params;
    console.log('getAllTasks', boardId);
    const tasks = await tasksService.getAllTasksByBoardId(boardId);
    res.status(200).json(tasks.map(Task.toResponse));
    // console.log(tasks.map(Task.toResponse));
  } catch (e) {
    console.log(`~~~~${e}~~~~allTasksError~~~~~~~~~~~~`);
  }
});

router.route('/:boardId/tasks/:taskId').get(async (req, res) => {
  try {
    // console.log('getById', req.params);
    const { boardId, taskId } = req.params;
    console.log('getTaskById', JSON.stringify(boardId, taskId));
    const task = await tasksService.getTaskByBoardIdAndTaskId({
      taskId,
      boardId
    });
    res.status(200).json(Task.toResponse(task));
  } catch (e) {
    console.log(`~~~~${e}~~~~getTaskByID~Error~~~~~~~~~~~~`);
  }
});

router.route('/:boardId/tasks').post(async (req, res) => {
  try {
    const { boardId } = req.params;
    const newTask = req.body;
    const taskId = v4();
    console.log('postTask', JSON.stringify(Task.toResponse(newTask)));
    const task = await tasksService.createTask({
      boardId,
      taskId,
      newTask
    });
    res.status(200).json(Task.toResponse(task));
  } catch (e) {
    console.log(`~~~~${e}~~~~createTasks~Error~~~~~~~~~~~~`);
  }
});

router.route('/:boardId/tasks/:taskId').put(async (req, res) => {
  try {
    const { boardId, taskId } = req.params;
    const updatedTask = req.body;
    console.log('putTask', boardId, taskId);
    const task = await tasksService.updateTask({
      taskId,
      boardId,
      updatedTask
    });
    res.status(200).json(Task.toResponse(task));
  } catch (e) {
    console.log(`~~~~${e}~~~updateTask~Error~~~~~~~~~~~~`);
  }
});

router.route('/:boardId/tasks/:taskId').delete(async (req, res) => {
  try {
    const { boardId, taskId } = req.params;
    console.log('delTask', boardId, taskId);
    await tasksService.deleteTask({
      taskId,
      boardId
    });
    res.sendStatus(204);
  } catch (e) {
    console.log(`~~~~${e}~~~~DeleteTasks~Error~~~~~~~~~~~~`);
  }
});

module.exports = router;
