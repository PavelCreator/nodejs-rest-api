const statusHandler = require('./handle-status.service');

const validationServive = {

	optionWatchRequired: function (options) {
		if (!options.watch) {
			statusHandler.error('Specify the --watch command line argument (e.g. "--watch file-name.json")');
		} else {
			statusHandler.info('--watch command line argument specified');
		}
	},

	checkExtension: function (options) {
		const fileNameArr = options.watch.split('.');
		const fileExtension = fileNameArr[fileNameArr.length - 1].toLowerCase();
		if (fileExtension !== 'json') {
			statusHandler.error('Requested file must have a JSON extension');
		} else {
			statusHandler.info('Requested file have a JSON extension');
		}
	}

}

module.exports = validationServive;