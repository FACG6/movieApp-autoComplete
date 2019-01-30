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
  ],
  [
    "html",
    ".navbar",
    ".navbar__h1",
    ".navbar__form",
    ".navbar__forminput",
    ".homeSection",
    ".resultRender"
  ]
);
