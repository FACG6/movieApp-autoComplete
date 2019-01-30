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

navbar__forminput.addEventListener('input', () => {
  const inputValue = navbar__forminput.value.trim();
  fetch(inputValue, 'POST', '/auto-complete', (error, response) => {
    renderAutoComplete(error, response);
  })
});

navbar__formsearch.addEventListener('click', (e) => {
  e.preventDefault();
  resultRender.classList.remove('resultRender')
  if (!navbar__forminput.value) {
    resultRenderContainer.innerHTML = "";
    const {
      warning
    } = createMovieNode(['warning'], ['p'], ['resultRender__container--warning']);
    warning.textContent = "please, Enter a Movie Name";
    resultRenderContainer.appendChild(warning);
  } else {
    const inputValue = navbar__forminput.value.trim();
    const api_url = getMovieUrl(inputValue);
    fetch(null, "GET", api_url, (error, movies) => {
      renderMovies(error, movies.results);
    })
    scrollToResult();
  }
})

const renderAutoComplete = (error, suggestions) => {
  if (error) {
    if (error === "500") fetch(null, 'GET', '/server-error', null)
    else fetch(null, 'GET', '/jgjs', null);
  }
  movieList.innerHTML = '';
  suggestions.forEach(movie => {
    const {movieOption} = createMovieNode(['movieOption'], ['option'], ['dataList__movieOption']);
    movieOption.value = movie;
    movieList.appendChild(movieOption);
  })
}
const renderMovies = (error, response) => {
  if (error) {
    const { warnningMsg } = createMovieNode(['warnningMsg'], ['h1'], ['resultRender__container--warning'])
    warnningMsg.textContent = `Error, ${error}`;
    resultRenderContainer.innerHTML = "";
    resultRenderContainer.appendChild(warnningMsg);
  } else {
    if (response.length === 0) {
      const { sorryMsg } = createMovieNode(['sorryMsg'], ['p'], ['resultRender__container--sorryMsg'])
      sorryMsg.textContent = "Sorry, NO Movies found with the name you entered";
      resultRenderContainer.innerHTML = "";
      resultRenderContainer.appendChild(sorryMsg);
    } else {
      resultRenderContainer.innerHTML = ""
      response.forEach(movie => {
        const {
          movieContainer,
          movieImage,
          movieTitle,
        } = createMovieNode(
          ['movieContainer', 'movieImage', 'movieTitle'], ['div', 'img', 'span'], ['resultRender__containerMovie', 'resultRender__containerMovie--img', 'resultRender__containerMovie--spanTitle']
        );
        movieImage.src = getImageUrl(movie.poster_path);
        movieImage.setAttribute('alt',  movie.original_title);
        movieTitle.textContent = movie.original_title;
        resultRenderContainer.appendChild(movieContainer);
        movieContainer.appendChild(movieImage);
        movieContainer.appendChild(movieTitle);
      })

    }
  }
};

navbar__formsearch.addEventListener("click", e => {
  e.preventDefault();
  scrollToResult();
});