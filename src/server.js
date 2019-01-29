const http = require("http");
const router = require("./router");

const server = http.createServer(router);
const port = 7425;

server.listen(port, () => {
  console.log(`server is up on localhost:${port} :)`);
});
