import express from "express";
import {
  createUser,
  deleteUserById,
  getUserById,
  getUsers,
  updateUser,
} from "../controller/user.js";

export const userRouter = express.Router();

userRouter
  .get("/users", getUsers)
  .get("/user/:id", getUserById)
  .post("/user/create", createUser)
  .put("/user", updateUser)
  .delete("/user/:id", deleteUserById);
