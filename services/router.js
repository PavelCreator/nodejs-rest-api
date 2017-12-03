const statusHandler = require('./handle-status.service');

const router = {

	/**
	 * Main part of application. Create routes from parsed file data.
	 * Also added mock for favicon.ico and wrong queries handler
	 * @param {Object} data Data for creating routes
	 * @param {Object} app Express app link for creating routes
	 */
	createRoutes: function (data, app) {
		for (let categoryName in data) {
			if (data.hasOwnProperty(categoryName)) {
				const categoryContent = data[categoryName];
				//creating routes for categories (e.g. http://localhost:8080/students)
				app.get('/' + categoryName, function (request, response) {
					//log in server console when route inited
					statusHandler.info('Route /' + categoryName + ' inited');
					response.send(categoryContent);
				});
				categoryContent.forEach(function (item) {
					if (item && item.id) {
						//creating routes for item (e.g. http://localhost:8080/students/1)
						app.get('/' + categoryName + '/' + item.id, function (request, response) {
							//log in server console when route inited
							statusHandler.info('Route /' + categoryName + '/' + item.id + ' inited');
							response.send(item);
						});
					}
				});
			}
		}

		//favicon mock for browser queries. Browser always init this route automatically
		app.get('/favicon.ico', function (request, response) {
			statusHandler.info('Browser favicon query');
			response.send('Browser favicon query');
		});

		/**
		 * Wrong url handler. Must be specified after all the routes are specified
		 * Prohibits the creation of new calls after the announcement
		 */
		app.all('*', function (request, response) {
			statusHandler.warning(`Wrong url inited: "${request.url}"`);
			response.send('There is no data for your request.');
		});
	}

}

module.exports = router;