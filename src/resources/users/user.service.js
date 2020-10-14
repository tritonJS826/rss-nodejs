const usersRepo = require('./user.memory.repository');

const getAllUsers = () => usersRepo.getAllUsers();

const getUserById = id => usersRepo.getUserById(id);

const createUser = user => usersRepo.createUser(user);

const updateUser = newUser => usersRepo.updateUser(newUser);

const deleteUser = id => usersRepo.deleteUser(id);

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
