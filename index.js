import express, { json } from "express";
import { userRouter } from "./routes/user.js";
import { orderRouter } from "./routes/order.js";
const port = 8080;

const app = express();

app.use(json());

app.use(userRouter);
app.use(orderRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
