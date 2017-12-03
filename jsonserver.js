const express = require('express');
const commandLineService = require('./services/command.line.service');
const validationService = require('./services/validation.service');
const fileService = require('./services/file.service');
const router = require('./services/router');
const statusHandler = require('./services/handle-status.service');

const app = express();
const options = commandLineService.setup();

app.listen(8080, function () {
	let fileContents, data;
	validationService.optionWatchRequired(options);
	validationService.checkExtension(options);
	fileContents = fileService.getFileContents(options);
	data = fileService.parseFile(fileContents);
	router.createRoutes(data, app);
	statusHandler.success("Running Express");
});