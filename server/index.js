let express = require("express");
//let router = express.Router();
let socketIo = require("socket.io");
let http = require("http");

const port = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const router = require("./router");
io.on("connection", socket => {
  console.log("we have new connection");
  socket.on("join", ({ name, room }, callback) => {
    console.log(name, room);

    const error = true;
    if (error) {
      callback({ error: error });
    }
  });
  socket.on("disconnect", () => {
    console.log(" User left");
  });
});

app.use(router);

server.listen(port, () =>
  console.log(`server has been started on port ${port}`)
);
