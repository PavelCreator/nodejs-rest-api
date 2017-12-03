const statusHandler = require('./handle-status.service');

const validationServive = {

	/**
	 * Check entered --watch command line argument
	 * @param {Object} options Command line options
	 */
	optionWatchRequired: function (options) {
		if (!options.watch) {
			statusHandler.error('Specify the --watch command line argument (e.g. "--watch file-name.json")');
		} else {
			statusHandler.info('--watch command line argument specified');
		}
	},

	/**
	 * Check ".json" extension for specified file. File can be uppercased
	 * @param {Object} options Command line options
	 */
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