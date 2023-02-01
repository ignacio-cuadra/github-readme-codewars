import http from "http";
import getStatsImage from "./getStatsImage.js";
import getUserData from "./getUserData.js";
const PORT = 3000;

const server = http.createServer((req, res) => {
  getUserData("ignacio-cuadra")
    .then((data) => {
      res.statusCode = 500;
      res.setHeader("Content-Type", "image/svg+xml; charset=utf-8");
      res.end(getStatsImage(data));
    })
    .catch((error) => {
      console.error(error);
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: "error" }));
    });
});

server.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}/`);
  console.log(`http://localhost:${PORT}/`);
});
