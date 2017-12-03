const statusHandler = require('./handle-status.service');

const router = {
	createRoutes: function (data, app) {
		for (let categoryName in data) {
			if (data.hasOwnProperty(categoryName)) {
				const categoryContent = data[categoryName];
				app.get('/' + categoryName, function (request, response) {
					statusHandler.info('Route /' + categoryName + ' inited');
					response.send(categoryContent);
				});
				categoryContent.forEach(function (item) {
					if (item && item.id) {
						app.get('/' + categoryName + '/' + item.id, function (request, response) {
							statusHandler.info('Route /' + categoryName + '/' + item.id + ' inited');
							response.send(item);
						});
					}
				});
			}
		}

		app.get('/favicon.ico', function (request, response) {
			statusHandler.info('Browser favicon query');
			response.send('Browser favicon query');
		});

		app.all('*', function (request, response) {
			statusHandler.warning(`Wrong url inited: "${request.url}"`);
			response.send('There is no data for your request.');
		});
	}

}

module.exports = router;