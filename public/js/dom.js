const createMovieNode = (elementsName, tagsName, className) => {
  if (elementsName.length !== tagsName.length) return "error";
  let nodes = {};
  elementsName.map((e, i) => {
    nodes[e] = document.createElement(tagsName[i]);
    nodes[e].classList.add(className[i])

  })

  return nodes;
};

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
  resultRender,
  movieList,
  resultRenderContainer
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
    "movieList",
    "resultRenderContainer"
  ], [
    "html",
    ".navbar",
    ".navbar__h1",
    ".navbar__form",
    ".navbar__form--input",
    ".navbar__form--search",
    ".homeSection",
    ".resultRender",
    ".movieList",
    '.resultRender__container'
  ]
);

const inputValue = navbar__forminput.value.trim();

navbar__forminput.addEventListener('input', () => {
  fetch(inputValue, 'POST', 'auto-complete', (error, response) => {
    renderAutoComplete(error, response);
  })
});

navbar__formsearch.addEventListener('submit', e => {
  e.preventDefault();
  const api_url = `https://api.themoviedb.org/3/search/movie?api_key=6b4029e64c1862a24fbb74c05d0aace8&language=en-US&query=${inputValue}`;
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
const renderMovies = (error, response) => {
  if (error) {
    const warnning = document.createElement('h1');
    warnning.textContent = `Error, ${error}`;
    resultRenderContainer.innerHTML = "";
    resultRenderContainer.appendChild(warnning);
  } else {
    if (response.length === 0) {
      const noMovies = document.createElement('p');
      noMovies.textContent = "Sorry, NO Movies found with the name you entered";
      resultRenderContainer.innerHTML = "";
     resultRenderContainer.appendChild(noMovies);
    } else {
      const movieResult = {
        movieContainer,
        movieImage,
        movieTitle,
      } = createMovieNode(
        ['movieContainer', 'movieImage', 'movieTitle'], ['div', 'img', 'span'], ['resultRender__containerMovie', 'resultRender__containerMovie--img', 'resultRender__containerMovie--spanTitle']
      );
      resultRenderContainer.appendChild(...movieResult);
    }
  }
};

navbar__formsearch.addEventListener("click", e => {
  e.preventDefault();
  scrollToResult();
});