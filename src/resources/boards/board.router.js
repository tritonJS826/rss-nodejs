const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');
const { v4 } = require('uuid');

router.route('/').get(async (req, res) => {
  try {
    const boards = await boardsService.getAllBoards();
    res.status(200).json(boards.map(Board.toResponse));
  } catch (e) {
    console.log('---------getAllBoards-Error-----------');
  }
});

router.route('/:boardId').get(async (req, res) => {
  try {
    const boardId = req.params.boardId;
    console.log('params', req.params);
    const board = await boardsService.getBoardById(boardId);
    res.status(200).json(Board.toResponse(board));
  } catch (e) {
    console.log('-----------getBoardById-Error--------------------');
    // console.log(`-----------${e}--------------------`);
    console.log('-----------getBoardById-Error--------------------');
  }
});

router.route('/').post(async (req, res) => {
  try {
    const { title, columns } = req.body;
    const id = v4();
    console.log(
      `!!!!!!!!!!BoardCreated!!!!!!!!!!${id}!!!!${title}!!!!!!!!!!!!!!!!!!!!!!!!!!`
    );
    await boardsService.createNewBoard({ id, title, columns });
    return res.status(200).json('undefined');
  } catch (e) {
    console.log('---------createNewBoard-Error------------------');
  }
});

router.route('/:boardId').put(async (req, res) => {
  const oldBoardId = req.params.boardId;
  const { newTitle, newColumns } = req.body;

  const response = await boardsService.updateBoard(oldBoardId, {
    oldBoardId,
    newTitle,
    newColumns
  });
  res.status(200).json(response);
});

router.route('/:boardId').delete(async (req, res) => {
  const boardId = req.params.boardId;

  const response = await boardsService.deleteBoardById(boardId);
  res.status(200).json(response);
});

module.exports = router;
