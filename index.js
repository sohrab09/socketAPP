// * Internal Imports
const express = require("express");
const app = express();
const http = require("http");
const expressServer = http.createServer(app);
const port = 3000;

// ? Socket Server Config
const { Server } = require("socket.io");
const io = new Server(expressServer);

// ! User Connection Checking
io.on("connection", function (socket) {
  socket.on("chat", function (chat) {
    console.log(chat);
  });
});

// HTML File Connection
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Server Listen
expressServer.listen(port, () => {
  console.log(`Express Server listening at http://localhost:${port}`);
});
