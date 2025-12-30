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
// READ
app.get("/", (req, res) => {
  console.log("GET Request Successfull!");
  res.send(users);
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
