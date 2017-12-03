const commandLineArgs = require('command-line-args');

//Define options
const optionDefinitions = [
	{name: 'watch', alias: 'w', type: String}
];

const commandLineService = {

	/**
	 * Setup arguments for reading from command line
	 * @returns {Object} command line arguments
	 */
	setup: function () {
		return commandLineArgs(optionDefinitions);
	}

}

module.exports = commandLineService;