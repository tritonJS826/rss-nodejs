const boardsRepo = require('./board.memory.repository');

const getAllBoards = () => boardsRepo.getAllBoards();

const getBoardById = boardId => boardsRepo.getBoardById(boardId);

const createNewBoard = ({ id, title, columns }) =>
  boardsRepo.createNewBoard({ id, title, columns });

const updateBoard = (oldBoardId, newBoard) => {
  boardsRepo.updateBoard(oldBoardId, newBoard);
};

const deleteBoardById = boardId => {
  boardsRepo.deleteBoardById(boardId);
};

module.exports = {
  getAllBoards,
  getBoardById,
  createNewBoard,
  updateBoard,
  deleteBoardById
};
