const boards = require('./boards');
const users = require('./users');
const tasks = require('./tasks');

class Repo {
  constructor() {
    this.boards = boards;
    this.users = users;
    this.tasks = tasks;
  }
  getTasks() {
    return this.tasks;
  }

  getBoards() {
    return this.boards;
  }

  getUsers() {
    return this.users;
  }

  setTasks() {
    this.tasks = tasks;
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
