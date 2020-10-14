const repo = require('../../constants/repository/repo');

const getAllBoards = async () => {
  const allBoards = repo.getBoards().boards;
  return allBoards;
};

const getBoardById = async boardId => {
  const rawBoard = repo.getBoards().boards.filter(el => el.id === boardId);
  const board = rawBoard[0];
  return board;
};

const createNewBoard = async ({ id, title, columns }) => {
  const oldBoards = repo.getBoards().boards;
  const allBoards = [...oldBoards, { id, title, columns }];
  repo.setBoards({ boards: allBoards });
  return { id, title, columns };
};

const updateBoard = async ({ id, title, columns }) => {
  const oldBoards = repo.getBoards().boards;
  const oldBoardsWithouChangingBoard = oldBoards.filter(el => el.id !== id);
  if (!oldBoardsWithouChangingBoard) return;
  const updatedBoards = [
    ...oldBoardsWithouChangingBoard,
    { id, title, columns }
  ];
  repo.setBoards({ boards: updatedBoards });
  return { id, title, columns };
};

const deleteBoardById = async boardId => {
  const oldBoards = repo.getBoards().boards;
  const boardsWithoutChangingBoard = oldBoards.filter(el => el.id !== boardId);
  repo.setBoards({ boards: boardsWithoutChangingBoard });
};

module.exports = {
  getAllBoards,
  getBoardById,
  createNewBoard,
  updateBoard,
  deleteBoardById
};
