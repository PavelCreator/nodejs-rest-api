const colors = require('colors');

const handleStatus = {

	success: function (text) {
		console.log(text.underline.green);
	},

	error: function (text) {
		console.log(text.underline.red);
		throw new Error(text);
	},

	warning: function (text) {
		console.log(text.underline.yellow);
	},

	info: function (text) {
		console.log(text.blue);
	}

}

module.exports = handleStatus;