const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const users = [
  {
    name: "John",
    age: 20,
  },
];
const myLogger = function (req, res, next) {
  console.log("Logged");
  next();
};

const handleUser = function (req, res, next) {
  // Process
  // Authentication
  req.user = "Ehsan";
  next();
};

// ** Below code must be use before routings **
app.use(myLogger);
// app.use(handleUser);

// READ
app.get("/", handleUser, (req, res) => {
  res.json({
    users: users,
    userName: req.user,
  });
});
// READ USERS
app.get("/user", (req, res) => {
  res.send(users);
});
// CREATE
app.post("/user", (req, res) => {
  console.log("req.body: ", req.body);
  users.push({ name: req.body.name, age: req.body.age });
  res.send(`Number of users: ${users.length}`);
  res.send("PUT Request Successfull!");
  res.send(`Data POSt Request Recieved`);
});

app.patch("/user/:id", (req, res) => {
  users[req.params.id].name = req.body.updatedName;
  res.json(users);
});
app.put("/user/:id", (req, res) => {
  users[req.params.id].job = req.body.job;
  res.send(`Data Update Request Recieved`);
});

app.delete("/delete/:id", (req, res) => {
  delete users[req.params.id];
  res.send(`Data DELETE Request Recieved`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
