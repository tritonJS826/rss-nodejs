const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');
const { v4 } = require('uuid');

router.route('/').get(async (req, res) => {
  try {
    const boards = await boardsService.getAllBoards();
    console.log('getAllBoard', boards);
    res.status(200).json(boards.map(Board.toResponse));
  } catch (e) {
    console.log('---------getAllBoards-Error-----------');
  }
});

router.route('/:boardId').get(async (req, res) => {
  try {
    const boardId = req.params.boardId;
    console.log('getBoardBYID', boardId);
    const board = await boardsService.getBoardById(boardId);
    res.status(200).json(Board.toResponse(board));
  } catch (e) {
    console.log('-----------getBoardById-Error--------------------');
    console.log(e);
    console.log('-----------getBoardById-Error--------------------');
  }
});

router.route('/').post(async (req, res) => {
  try {
    const { title, columns } = req.body;
    console.log('createBoard', title, columns);
    const id = v4();
    await boardsService.createNewBoard({ id, title, columns });
    res.status(200).json(Board.toResponse({ id, title, columns }));
  } catch (e) {
    console.log('---------createNewBoard-Error------------------');
  }
});

router.route('/:boardId').put(async (req, res) => {
  try {
    const id = req.params.boardId;
    const { title, columns } = req.body;
    console.log('updateBoard', title, columns, id);
    await boardsService.updateBoard({
      id,
      title,
      columns
    });
    res.status(200).json(Board.toResponse({ id, title, columns }));
  } catch (e) {
    console.log('----------updateBoardById-Error---------------------');
  }
});

router.route('/:boardId').delete(async (req, res) => {
  try {
    const boardId = req.params.boardId;
    console.log('delBoard', boardId);
    await boardsService.deleteBoardById(boardId);
    res.sendStatus(204);
  } catch (e) {
    console.log('----------deleteBoard-Error---------------');
    console.log(e);
    console.log('----------deleteBoard-Error---------------');
  }
});

module.exports = router;
