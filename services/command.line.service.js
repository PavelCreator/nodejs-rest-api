const commandLineArgs = require('command-line-args');

const optionDefinitions = [
	{name: 'watch', alias: 'w', type: String}
];

const commandLineService = {
	setup: function () {
		return commandLineArgs(optionDefinitions);
	}
}

module.exports = commandLineService;