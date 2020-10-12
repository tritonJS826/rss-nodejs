const repo = require('../../constants/repository/repo');
const { v4 } = require('uuid');

const getAllBoards = async () => {
  const allBoards = repo.getBoards().boards.map(({ id, title, columns }) => {
    return { id, title, columns };
  });
  return allBoards;
};

const getBoardById = async boardId => {
  // console.log(
  //   `~~~~~ID~~${boardId}~~from~~~~~${repo.getBoards().boards}~~~~~~~~~~~~~~~~~~`
  // );
  const board = repo.getBoards().boards.filter(el => el.id === boardId);
  // eslint-disable-next-line
  // for (const key in board[0]) {
  //   console.log(`~~~~~~~~~~~${key}~~~~~~~~~~~~~~~~~~~`);
  // }
  return board[0];
};

const createNewBoard = async ({ title, columns }) => {
  const oldBoards = repo.getBoards().boards;
  const id = v4();
  const allBoards = [...oldBoards, { id, title, columns }];
  repo.setBoards({ boards: allBoards });
  return `board ${title} created`;
};

const updateBoard = async (oldBoardId, { newTitle, newColumns }) => {
  const oldBoards = repo.getBoards().boards;
  const oldBoardsWithouChangingBoard = oldBoards.filter(
    el => el.id !== oldBoardId
  );
  const updatedBoards = [
    ...oldBoardsWithouChangingBoard,
    { oldBoardId, newTitle, newColumns }
  ];
  repo.setBoards({ boards: updatedBoards });
  return `board ${oldBoardId} updated`;
};

const deleteBoardById = async boardId => {
  const oldBoards = repo.getBoards().boards;
  const boardsWithouChangingBoard = oldBoards.filter(el => el.id !== boardId);
  repo.setBoards({ boards: boardsWithouChangingBoard });
  return `board ${boardId} deleted`;
};

module.exports = {
  getAllBoards,
  getBoardById,
  createNewBoard,
  updateBoard,
  deleteBoardById
};
