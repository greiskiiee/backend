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
  .get("/", getUsers)
  .get("/:id", getUserById)
  .post("/", createUser)
  .put("/", updateUser)
  .delete("/:id", deleteUserById);
