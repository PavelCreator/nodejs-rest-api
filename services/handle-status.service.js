const colors = require('colors');

const handleStatus = {
	success: function (text) {
		console.log(text.underline.green);
	},
	error: function (text) {
		console.log(text.underline.red);
		throw new Error(text);
	},
	info: function (text) {
		console.log(text.blue);
	}
}

module.exports = handleStatus;