const {
  handleHome,
  handleStatics,
  handleAutoComplete,
  handleNotFoundError,
} = require("./handlers");

const router = (request, response) => {
  const endpoint = request.url;
  if (endpoint === "/") {
    handleHome(request, response);
  } else if (
    endpoint.includes("/public/") ||
    endpoint.includes("/favicon.ico")
  ) {
    handleStatics(request, response);
  } else if (endpoint === "/auto-complete") {
    handleAutoComplete(request, response);
  } else {
    handleNotFoundError(request, response);
  }
};

module.exports = router;
