const fs = require('fs')
const path = require('path')


// handlehomePage <<<<ameen>>>>
const handlehomePage = (res,endpoint)=>{
    const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      res.writeHead(500, { "contant-Type": "text/html" });
      res.end("<h1>server error sorry !</h1>");
    } else if (file) {
      res.writeHead(200, { "contant-Type": "text/html" });
      res.end(file);
    }
  }); 
}



// handleStatics <<<<israa>>>>















// handleAutoComplete <<<<angham>>>>















// handleError <<<<ahmed>>>>
const handleError = (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>404 Page not found !!!</h1>');
    response.end();
} 

module.exports = {
    handlehomePage,
    handleStatics,
    handleAutoComplete,
    handleError,
}