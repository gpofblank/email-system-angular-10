const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const database = require("./databaseService");

const fs = require("fs");

const staticFolder = path.join(__dirname, "../dist/email-system");
console.log(__dirname);

const userController = require("./usersController");

app.use(express.static(staticFolder));
app.use(cors());
app.use(bodyParser.json());

app.post("/auth/register", userController.registerUser);
app.post("/auth/login", userController.loginUser);

app.post("/user/create", userController.createUser);

app.post("/auth/logout", userController.logoutUser)

app.get("/users", userController.getUsers);

app.listen(port, () => {
  console.log(`Server is listerning on port: ${port}`);
  database.readDatabase();
});
