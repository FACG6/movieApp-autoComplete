const fs = require('fs');
const path = require('path');
const querystring = require('querystring');



// handlehomePage <<<<ameen>>>>















// handleStatics <<<<israa>>>>


const handleAutoComplete = (request, response)=>{
  let allData = '';
  request.on('data', (chunckData) => {
    allData += chunckData;
  });
  request.on('end', () => {
    const converteData = querystring.parse(allData);
    const data = getData(converteData);
    response.end(JSON.stringify(data);
  })
}












// handleAutoComplete <<<<angham>>>>















// handleEroor <<<<ahmed>>>>

module.exports = handleAutoComplete ;
