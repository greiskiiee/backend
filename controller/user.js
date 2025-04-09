import { v4 as uuidv4 } from "uuid";

export let users = [];

export const createUser = (req, res) => {
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
    message: "user added",
  });
};

export const getUsers = (_, res) => {
  res.send(users);
};

export const getUserById = (req, res) => {
  const { id } = req.params;
  const filter = users.find((user) => user.id === id);
  res.send(filter);
};

export const deleteUserById = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);

  res.send({
    success: true,
    message: "deleted user",
  });
};

export const updateUser = (req, res) => {
  const { id, newName, age } = req.body;
  let userFound = false;

  users.map((user) => {
    if (user.id === id) {
      if (newName) {
        user.username = newName;
      }
      if (age) {
        user.age = age;
      }
      userFound = true;
    }
  });

  if (userFound) {
    res.send({
      success: true,
      message: "updated user",
    });
  } else {
    res.send({
      success: true,
      message: "user not found",
    });
  }
};
