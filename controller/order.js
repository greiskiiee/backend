import { v4 as uuidv4 } from "uuid";
import { users } from "./user.js";

let orders = [];
const statuss = ["PENDING", "ONGOING", "DELIEVERED"];

export const createOrder = (req, res) => {
  const { userId, food, price } = req.body;

  const d = new Date();
  let createdAt = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`;
  let updatedAt = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`;
  users.map((user) => {
    if (user.id == userId) {
      orders.push({
        orderId: uuidv4(),
        userId,
        food,
        price,
        createdAt,
        updatedAt,
        status: statuss[0],
      });
      return res
        .send({
          success: true,
          message: "order placed",
        })
        .end();
    }
    res.send({
      success: true,
      message: "did not find user",
    });
  });
};

export const getOrders = (_, res) => {
  res.send(orders);
};
