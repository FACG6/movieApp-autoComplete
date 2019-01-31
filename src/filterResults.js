const moviesData = require("./movies.json");

const getData = value => {
  const moviesObjects = moviesData.filter(movie =>
    movie.title.toLowerCase().startsWith(value.theData.toLowerCase())
  );
  return moviesObjects.map(movieObject => movieObject.title);
};
if (module) module.exports = getData;
