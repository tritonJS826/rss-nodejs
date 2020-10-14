const repo = require('../../constants/repository/repo');

const getAllTasksByBoardId = async boardId => {
  const allTasks = await repo.getTasks().tasks;
  const allTasksByBoardId = allTasks.filter(task => task.boardId === boardId);
  return allTasksByBoardId;
};

const getTaskByBoardIdAndTaskId = async ({ boardId, taskId }) => {
  const allTasks = await repo.getTasks().tasks;
  // console.log(`############${allTasks}##################`);
  const currentTask = allTasks
    .filter(task => task.boardId === boardId)
    .filter(task => task.id === taskId);
  // console.log(
  //   `>>>>>>>>>>>>1>${JSON.stringify(boardId, taskId)}>>>>>>>>>>>>>>>>>>>>>>`
  // );

  return currentTask;
};

const createTask = async ({ boardId, taskId, newTask }) => {
  const oldTasks = await repo.getTasks().tasks;

  const allTasks = [...oldTasks, { ...newTask, id: taskId, boardId }];
  repo.setTasks({ tasks: allTasks });
  // console.log(`>>>>>>>>>>>2>>${JSON.stringify(boardId)}>>>>>>>>>>>>>>>>>>>>>>`);

  return { ...newTask, id: taskId, boardId };
};

const updateTask = async ({ taskId, boardId, updatedTask }) => {
  const oldTasks = await repo.getTasks().tasks;

  const changedTasks = oldTasks.map(task => {
    if (task.id === taskId) {
      return { boardId, ...updatedTask, id: taskId };
    }
  });

  repo.setTasks({ tasks: changedTasks });
  // console.log(`>>>>>>>>3>>>>>${JSON.stringify(boardId)}>>>>>>>>>>>>>>>>>>>>>>`);

  return { boardId, ...updatedTask, id: taskId };
};

const deleteTask = async ({ taskId, boardId }) => {
  console.log(boardId);
  const oldTasks = await repo.getTasks().tasks;
  const changedTasks = oldTasks.filter(task => task.id !== taskId);
  // console.log(
  // `>>>>>>>>>>4>>>${JSON.stringify(changedTasks)}>>>>>>>>>>>>>>>>>>>>>>`
  // );

  repo.setTasks({ tasks: changedTasks });
};

module.exports = {
  getAllTasksByBoardId,
  getTaskByBoardIdAndTaskId,
  createTask,
  updateTask,
  deleteTask
};
