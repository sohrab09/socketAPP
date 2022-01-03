// Internal Imports 

const express = require("express");
const app = express();
const http = require("http");
const expressServer = http.createServer(app);
const port = 3000;







// HTML File Connenction
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


// Server Listen 
expressServer.listen(port, () => {
  console.log(`Express Server listening at http://localhost:${port}`);
});
