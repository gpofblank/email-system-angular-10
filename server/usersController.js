const path = require("path");
const fs = require("fs");
const database = require("./databaseService");
const uuid = require("uuid").v4;

exports.createUser = (req, res) => {
  const id = uuid();
  const body = req.body;

  const user = { id, ...body };
  database.addUser(user);

  database.updateDatabase(() => {
    res.json(user);
  });
};

exports.getUsers = (req, res) => {
  res.json(database.getAllUsers());
};

// Post request with body {email, password, username, phonenumber}
exports.registerUser = (req, res) => {
  const id = uuid();
  const body = req.body;

  const user = { id, ...body };
  database.addUser(user);
  this.loginUser(req, res)
};

exports.loginUser = (req, res) => {
  // email, password
  const body = req.body;
  const users = database.getAllUsers();
  let existingUser;
  users.forEach((user) => {
    if (user.email == body.email && user.password == body.password) {
      database.updateUser(user.id, { session: uuid() });
      existingUser = user;
    }
  });

  if (existingUser) {
    return res.json(existingUser);
  } else {
    return res.status(401).json({ error: "Auth failed" });
  }
};

exports.logoutUser = (req, res) => {
  const body = req.body;
  database.updateUser(body.userId, { session: null })
  res.json({})
}
