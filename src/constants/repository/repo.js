const boards = require('./boards');
const users = require('./users');

class Repo {
  constructor() {
    this.boards = boards;
    this.users = users;
  }

  getBoards() {
    return this.boards;
  }

  getUsers() {
    return this.users;
  }

  setBoards(newBoards) {
    this.boards = newBoards;
  }

  setUsers(newUsers) {
    this.users = newUsers;
  }
}

const repo = new Repo();

module.exports = repo;
