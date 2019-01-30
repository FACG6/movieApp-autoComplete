const {
	handleHome,
	handleStatics,
	handleAutoComplete,
	handleNotFound
} = require('./handlers');

const router = (request, response) => {
    const endpoint = request.url;
    
	if (endpoint === '/') {
		handleHome(request, response);
	} else if (endpoint.includes('/public') || endpoint.includes('favicon')) {
		handleStatics(request, response);
    } 
    else if (endpoint === '/auto-complete') {
		handleAutoComplete(request, response);
    } 
    else {
		handleNotFound(request, response);
	}
}

module.exports = router ;
