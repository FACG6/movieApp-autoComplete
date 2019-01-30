const createMovieNode = (elementsName, tagsName) => {
  if (elementsName.length !== tagsName.length) return "error";
  let nodes = {};
  elementsName.map((e, i) => (nodes[e] = document.createElement(tagsName[i])));
  return nodes;
};

const appendElement = (requestelementsName, append) => {
  if (requestelementsName.length === 0) return "error";
  requestelementsName.forEach(requestlement =>
    append.appendChild(requestlement)
  );
}

const querySelectors = (selectorsName, enterTypeofQuery) => {
  if (selectorsName.length !== enterTypeofQuery.length) return "Error";
  let elements = {};
  enterTypeofQuery.map(
    (e, i) => (elements[selectorsName[i]] = document.querySelector(e))
  );
  return elements;
}

const scrollToResult = () => {
  setTimeout(() => (html.scrollTop = resultRender.offsetTop), 200);
}

const {
  html,
  navbar,
  navbar__h1,
  navbar__form,
  navbar__forminput,
  navbar__formsearch,
  homeSection,
  resultRender
} = querySelectors(
  [
    "html",
    "navbar",
    "navbar__h1",
    "navbar__form",
    "navbar__forminput",
    "navbar__formsearch",
    "homeSection",
    "resultRender",
    "movieList"
  ], [
    "html",
    ".navbar",
    ".navbar__h1",
    ".navbar__form",
    ".navbar__form--input",
    ".navbar__form--search",
    ".homeSection",
    ".resultRender",
    ".movieList"
  ]
);


navbar__formsearch.addEventListener('submit', e => {
  e.preventDefault();
  const api_url = `https://api.themoviedb.org/3/search/movie?api_key=6b4029e64c1862a24fbb74c05d0aace8&language=en-US&query=${navbar__forminput}`;
  fetch(null, "GET", api_url, (error, movies) => {
    renderMovies(error, movies.results);
  })
  scrollToResult();
})

const renderAutoComplete = (error, suggestions) => {
  if (error) {
    if (error === "500") fetch(null, 'GET', '/server-error', null)
    else fetch(null, 'GET', '/jgjs', null);
  }
  suggestions.forEach(movie => {
    const option = document.createElement('option');
    option.classList.add('dataList__movieOption');
    option.textContent = movie;
    movieList.appendChild(option);
  })
}