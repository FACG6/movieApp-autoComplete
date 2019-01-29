const fs = require('fs')
const path = require('path')

// handlehomePage <<<<ameen>>>>
const handleHome = (req, res) => {
    const filePath = path.join(__dirname, "..", "public", "index.html");
    fs.readFile(filePath, (error, file) => {
        if (error) {
            res.writeHead(500, {
                "content-type": "text/html"
            });
            res.end("<h1>server error sorry!</h1>");
        } else if (file) {
            res.writeHead(200, {
                "content-type": "text/html"
            });
            res.end(file);
        }
    });
}

// handleStatics <<<<israa>>>>
const handleStatics = (request, response) => {
    const endpoint = request.url;
    const extention = endpoint.split(".")[1];
    const fileTypes = {
        html: 'text/html',
        css: 'text/css',
        js: 'text/javascript',
        ico: 'image/x-icon'
    }
    const filePath = path.join(__dirname, '..', ...endpoint.split('/'));
    console.log(filePath);
    fs.readFile(filePath, (err, file) => {
        if (err) {
            response.writeHead(500, {
                'content-type': 'text/html'
            });
            response.end('<h1>Internal Server Error</h1>');
        } else {
            response.writeHead(200, {
                'content-type': fileTypes[extention]
            });
            response.write(file)
            response.end();
        }
    })
}

// handleAutoComplete <<<<angham>>>>















// handleError <<<<ahmed>>>>
const handleError = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.write('<h1>404 Page not found !!!</h1>');
    response.end();
}

module.exports = {
    handleHome,
    handleStatics,
    // handleAutoComplete,
    handleError,
}
