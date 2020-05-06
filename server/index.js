let express = require("express");
let router = express.Router();
let socketIo = require("socket.io");
let http = require("http");

const port = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

server.listen(port, () =>
  console.log(`server has been started on port ${port}`)
);
