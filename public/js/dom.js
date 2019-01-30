const inputValue = navbar__forminput.value.trim();

navbar__forminput.addEventListener("input", () => {
  fetch(inputValue, "POST", "auto-complete", (error, response) => {
    renderAutoComplete(error, response);
  });
});

const createMovieNode = (elementsName, tagsName, className) => {
  if (elementsName.length !== tagsName.length) return "error";
  let nodes = {};
  elementsName.map((e, i) => {
    nodes[e] = document.createElement(tagsName[i]);
    nodes[e].classList.add(className[i]);
  });

  return nodes;
};

function appendElement(requestelementsName, append) {
  if (requestelementsName.length === 0) return "error";
  requestelementsName.forEach(requestlement =>
    append.appendChild(requestlement)
  );
}

function querySelectors(selectorsName, enterTypeofQuery) {
  if (selectorsName.length !== enterTypeofQuery.length) return "Error";
  let elements = {};
  enterTypeofQuery.map(
    (e, i) => (elements[selectorsName[i]] = document.querySelector(e))
  );
  return elements;
}

function scrollToResult() {
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
    "resultRender"
  ],
  [
    "html",
    ".navbar",
    ".navbar__h1",
    ".navbar__form",
    ".navbar__form--input",
    ".navbar__form--search",
    ".homeSection",
    ".resultRender"
  ]
);

const renderMovies = (error, response) => {
  if (error) {
    const warnning = document.createElement("h1");
    warnning.textContent = `Error, ${error}`;
    resultRender.innerHTML = "";
    resultRender.appendChild(warnning);
  } else {
    if (response.length === 0) {
      const noMovies = document.createElement("p");
      noMovies.textContent = "Sorry, NO Movies found with the name you entered";
      resultRender.innerHTML = "";
      resultRender.appendChild(noMovies);
    } else {
      const movieResult = ({
        movieContainer,
        movieImage,
        movieTitle
      } = createMovieNode(
        ["movieContainer", "movieImage", "movieTitle"],
        ["div", "img", "h3"],
        ["movieContainer", "movieImage", "movieTitle"]
      ));
      appendElement(...movieResult);
    }
  }
};

navbar__formsearch.addEventListener("click", e => {
  e.preventDefault();
  scrollToResult();
});
