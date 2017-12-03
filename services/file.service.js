const statusHandler = require('./handle-status.service');
const fs = require('fs');

const fileService = {

	getFileContents: function (options) {
		try {
			const fileContents = fs.readFileSync('./' + options.watch, 'utf8')
			statusHandler.info('Requested file found');
			return fileContents;
		} catch (err) {
			statusHandler.error('Requested file not found');
		}
	},

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