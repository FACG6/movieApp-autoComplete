const fs = require('fs')
const path = require('path')


// handlehomePage <<<<ameen>>>>















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