const sumbit = querySelector('.navbar__form--search');
sumbit.addEventListener('submit', e => {
  e.preventDefault();
  const api_url = `https://api.themoviedb.org/3/search/movie?api_key=6b4029e64c1862a24fbb74c05d0aace8&language=en-US&query=${inputValue}`;
  fetch(null, "GET", api_url, (error, movies) => {
    renderMovies(error, movies.results);
  })
})

const createMovieNode = (elementsName, tagsName) => {
  if (elementsName.length !== tagsName.length) return "error";
  let nodes = {};
  elementsName.map((e, i) => (nodes[e] = document.createElement(tagsName[i])));
  return nodes;
};

function appendElement(requestelementsName, append) {
  if (requestelementsName.length === 0) return "error";
  requestelementsName.forEach(requestlement =>
    append.appendChild(requestlement)
  );
}

function addClasses(elementsName, className) {
  if (elementsName.length !== className.length) return "error";
  let nodes = {};
  elementsName.map((e, i) => (nodes[e] = e.classList.add(className[i])));
  return nodes;
}

function querySelectors(selectorsName, enterTypeofQuery) {
  if (selectorsName.length !== enterTypeofQuery.length) return "Error";
  let elements = {};
  enterTypeofQuery.map(
    (e, i) => (elements[selectorsName[i]] = document.querySelector(e))
  );
  return elements;
}

const {
  html,
  navbar,
  navbar__h1,
  navbar__form,
  navbar__forminput,
  homeSection,
  resultRender
} = querySelectors(
  [
    "html",
    "navbar",
    "navbar__h1",
    "navbar__form",
    "navbar__forminput",
    "homeSection",
    "resultRender"
  ], [
    "html",
    ".navbar",
    ".navbar__h1",
    ".navbar__form",
    ".navbar__forminput",
    ".homeSection",
    ".resultRender"
  ]
);