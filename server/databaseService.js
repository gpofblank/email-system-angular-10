const path = require('path')
const fs = require('fs')

let database = {
  users: {},
  emails: {},
};

exports.updateDatabase = (callback) => {
  const filePath = path.join(__dirname, "/database.json");
  fs.writeFile(filePath, JSON.stringify(database), () => {
    console.log("database update complete");

    if (callback) {
      callback();
    }
  });
};

exports.readDatabase = () => {
  const filePath = path.join(__dirname, "/database.json");
  fs.readFile(filePath, (err, file) => {
    if (err) {
      console.error(err);
    }
    database = JSON.parse(file);
    console.log(database.user);
  });
};

exports.addUser = (user) => {
  database.users[user.id] = user;
  this.updateDatabase();
};

exports.deleteUser = (userId) => {
  delete database.users[userId];
  this.updateDatabase();
}

exports.updateUser = (userId, changes) => {

  const userToUpdate = database.users[userId];
  const updatedUser = { ...userToUpdate, ...changes };
  database.users[userId] = updatedUser;
  this.updateDatabase();
}

exports.getAllUsers = () => {
  return Object.keys(database.users).map(key => database.users[key])
}
