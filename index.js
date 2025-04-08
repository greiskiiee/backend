import express, { json } from "express";

const port = 8080;

const app = express();

app.get("/", (req, res) => {
  console.log(req);
  res.send("Hello worldddddd");
});
app.use(json());
const users = [];

app.post("/user/create", (req, res) => {
  const { username, gender, age, email } = req.body;
  users.push({
    username,
    gender,
    age,
    email,
  });
  console.log(users, "users");
  res.send({
    success: true,
    message: "done",
  });
});

app.listen(port, () => {
  console.log(`Server working at http://localhost:${port}`);
});
