const repo = require('../../constants/repository/repo');

const getAllUsers = async () => {
  const users = await repo.getUsers();
  return users.users;
};

const getUserById = async id => {
  const allUsers = await repo.getUsers().users;
  const user = allUsers.filter(currentUser => currentUser.id === id);
  return user[0];
};

const createUser = async user => {
  const oldUsers = await repo.getUsers().users;
  const allUsers = [...oldUsers, user];
  repo.setUsers({ users: allUsers });
  return user;
};

const updateUser = async user => {
  const oldUsers = await repo.getUsers().users;
  const newUsers = oldUsers.map(usr => {
    if (usr.id === user.id) return user;
    return usr;
  });
  repo.setUsers({ users: newUsers });
  return user;
};

const deleteUser = async id => {
  const allUsers = await repo.getUsers().users;
  const newUsers = allUsers.filter(currentUser => currentUser.id !== id);
  repo.setUsers({ users: newUsers });
  return;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
