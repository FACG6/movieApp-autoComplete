const fs = require("fs");
const path = require("path");
const getData = require("./filterResults");

const handleHome = (req, res) => {
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      handleServerError(request, response);
    } else if (file) {
      res.writeHead(200, {
        "content-type": "text/html"
      });
      res.end(file);
    }
  });
};

const handleStatics = (request, response) => {
  const endpoint = request.url;
  const extention = endpoint.split(".")[1];
  const fileTypes = {
    html: "text/html",
    css: "text/css",
    js: "text/javascript",
    ico: "image/x-icon"
  };
  const filePath = path.join(__dirname, "..", ...endpoint.split("/"));
  fs.readFile(filePath, (err, file) => {
    if (err) {
      handleServerError(request, response);
    } else {
      response.writeHead(200, {
        "content-type": fileTypes[extention]
      });
      response.write(file);
      response.end();
    }
  });
};

const handleAutoComplete = (request, response) => {
  let allData = "";
  request.on("data", chunckData => {
    allData += chunckData;
  });
  request.on("end", () => {
    const data = getData(allData);
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify(data));
  });
};

const handleNotFoundError = (request, response) => {
  response.writeHead(404, {
    "Content-Type": "text/html"
  });
  response.write("<h1>404 Page not found !!!</h1>");
  response.end();
};

const handleServerError = (req, res) => {
  res.writeHead(500, { "content-type": "text/html" });
  res.end("<h1>Internal Server Error !!</h1>");
};

if(module) {
  module.exports = {
    handleHome,
    handleStatics,
    handleAutoComplete,
    handleNotFoundError
  };
}


