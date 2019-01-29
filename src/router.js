const {
	handleHome,
	hanleStatics,
	handleAutoComplete,
	handleNotFound
} = require('./handlers');

const router = (request, response) => {
	const endpoint = request.url;
	if (endpoint === '/') {
		handleHome(request, response);
	} else if (endpoint.includes('/public')) {
		hanleStatics(request, response);
	} else if (endpoint === '/auto-complete') {
		handleAutoComplete(request, response);
	} else {
		handleNotFound(request, response);
	}
}
