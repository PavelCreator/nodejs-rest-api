const statusHandler = require('./handle-status.service');
const fs = require('fs');

const fileService = {

	/**
	 * Read file from specified path from command line options. Validation included
	 * @param {Object} options Command line options
	 * @returns {string} file content
	 */
	getFileContents: function (options) {
		try {
			const fileContents = fs.readFileSync('./' + options.watch, 'utf8')
			statusHandler.info('Requested file found');
			return fileContents;
		} catch (err) {
			statusHandler.error('Requested file not found');
		}
	},

	/**
	 * Parse JSON from string. Validation included
	 * @param {string} file File to parse
	 */
	parseFile: function (file) {
		try {
			const data = JSON.parse(file);
			statusHandler.info('JSON file successfully parsed');
			return data;
		} catch (err) {
			statusHandler.error('The requested file is not in the correct format. ' +
				'The file must have a JSON extension and not have errors.');
		}
	}

}

module.exports = fileService;