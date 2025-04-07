import http from "http";

// console.log(http, "http");

const port = 8080;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/json");
  const movie = {
    name: "wicked",
    genre_ids: [12, 31],
    id: 123,
  };
  res.end(JSON.stringify(movie));
});

server.listen(port, () => {
  console.log(`Server working at http://localhost:${port}`);
});
