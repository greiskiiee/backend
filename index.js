import express, { json } from "express";
import { v4 as uuidv4 } from "uuid";
const port = 8080;

const app = express();

app.get("/", (req, res) => {
  console.log(req);
  res.send("Hello worldddddd");
});
app.use(json());
const users = [];

app.post("/user/create", (req, res) => {
  const { username, gender, age, email, id } = req.body;
  users.push({
    username,
    gender,
    age,
    email,
    id: uuidv4(),
  });
  res.send({
    success: true,
    message: "done",
  });
});

app.get("/users", (_, res) => {
  res.send(users);
});

app.get("/user", (req, res) => {
  // const search = "test@gmail.com";
  const { id } = req.body;
  const filter = users.find((user) => user.id === id);
  res.send(filter);
});

app.listen(port, () => {
  console.log(`Server working at http://localhost:${port}`);
});
