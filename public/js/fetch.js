const fetch = (value, method, url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      if (xhr.status !== 200) {
        const error = xhr.status;
        callback(error, null);
      } else {
        if (JSON.parse(xhr.responseText))
          callback(null, JSON.parse(xhr.responseText));
        else callback(`Error, Data not convertable`, null);
      }
      callback(null, JSON.parse(xhr.responseText));

    }
  };
  xhr.open(method, url);
  xhr.send(value);
};

const getMovieUrl = (query) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=6b4029e64c1862a24fbb74c05d0aace8&language=en-US&query=${query}`;

}
const getImageUrl = (moviename) => {
  return `https://image.tmdb.org/t/p/w600_and_h900_bestv2${moviename}`;
}