const { v4 } = require('uuid');
const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  try {
    const users = await usersService.getAllUsers();
    console.log('getUsers', users);
    return res.status(200).json(users.map(User.toResponse));
  } catch (e) {
    console.log('~~~~~~~~~~~~~getUsers~Error~~~~~~~~~~~~~~~~~~~~~~~~');
  }
});

router.route('/:userId').get(async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log('getUserBuID', userId);
    const user = await usersService.getUserById(userId);
    return res.status(200).json(User.toResponse(user));
  } catch (e) {
    const userId = req.params.userId;
    console.log(
      `~~~~~~~~~${userId}~~~~getUserById~Error~~~~~~~~~~~~~~~~~~~~~~~~`
    );
  }
});

router.route('/').post(async (req, res) => {
  try {
    const id = v4();
    const { name, login, password } = req.body;
    console.log('postUser', name, login, password);
    const newUser = await usersService.createUser({
      id,
      name,
      login,
      password
    });
    return res.status(200).json(User.toResponse(newUser));
  } catch (e) {
    console.log(`~~~~~~~~~~~~${e}~getUserId~Error~~~~~~~~~~~~~~~~~~~~~~~~`);
  }
});

router.route('/:userId').put(async (req, res) => {
  try {
    const id = req.params.userId;
    const { name, login, password } = req.body;
    console.log('updateUser', id);
    const newUser = await usersService.updateUser({
      id,
      name,
      login,
      password
    });
    return res.status(200).json(User.toResponse(newUser));
  } catch (e) {
    console.log(
      `~~~~~~~~~~~~${e}~updateUserById~Error~~~~~~~~~~~~~~~~~~~~~~~~`
    );
  }
});

router.route('/:userId').delete(async (req, res) => {
  try {
    const id = req.params.userId;
    console.log('deleteUser', id);
    await usersService.deleteUser(id);

    return res.sendStatus(204);
  } catch (e) {
    console.log(
      `~~~~~~~~~~~~${e}~deleteUserById~Error~~~~~~~~~~~~~~~~~~~~~~~~`
    );
  }
});

module.exports = router;
