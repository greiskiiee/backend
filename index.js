import express, { json } from "express";
import { v4 as uuidv4 } from "uuid";
const port = 8080;

const app = express();

app.get("/", (req, res) => {
  console.log(req);
  res.send("Hello worldddddd");
});
app.use(json());
let products = [];
let category = [
  {
    name: "",
    id: "2890",
  },
  {
    name: "",
    id: "2894",
  },
  {
    name: "",
    id: "2436",
  },
  {
    name: "",
    id: "2049",
  },
];

app.post("/product", (req, res) => {
  const { name, price, brand, category, id } = req.body;
  users.push({
    name,
    price,
    brand,
    category,
    id: uuidv4(),
  });
  res.send({
    success: true,
    message: "product added",
  });
});

app.get("/products", (_, res) => {
  res.send(users);
});

app.get("/product", (req, res) => {
  const { id } = req.body;
  const filter = products.find((product) => product.id === id);
  res.send(filter);
});

app.get("/product/category", (req, res) => {
  const { id } = req.body;
  const filter = products.find((product) => product.category.includes(id));
  res.send(filter);
});

app.delete("/product", (req, res) => {
  const { id } = req.body;
  products = products.filter((product) => product.id !== id);

  res.send({
    success: true,
    message: "deleted product",
  });
});

app.put("/product", (req, res) => {
  const { id, newName, age } = req.body;
  let productFound = false;

  products.map((product) => {
    if (product.id === id) {
      if (newName) {
        product.username = newName;
      }
      if (age) {
        product.age = age;
      }
      productFound = true;
    }
  });

  if (productFound) {
    res.send({
      success: true,
      message: "updated product",
    });
  } else {
    res.send({
      success: true,
      message: "product not found",
    });
  }
});

app.listen(port, () => {
  console.log(`Server working at http://localhost:${port}`);
});
