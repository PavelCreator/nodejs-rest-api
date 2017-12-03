const colors = require('colors');

/**
 * Service for to display color messages to the server console
 * Also error method throw error and stop server
 */
const handleStatus = {

	/**
	 * Show success status messages
	 * @param {String} text Text to show in server console
	 */
	success: function (text) {
		console.log(text.underline.green);
	},

	/**
	 * Show error status messages, throw error and stop server
	 * @param {String} text Text to show in server console
	 */
	error: function (text) {
		console.log(text.underline.red);
		throw new Error(text);
	},

	/**
	 * Show warning status messages
	 * @param {String} text Text to show in server console
	 */
	warning: function (text) {
		console.log(text.underline.yellow);
	},

	/**
	 * Show info status messages
	 * @param {String} text Text to show in server console
	 */
	info: function (text) {
		console.log(text.blue);
	}

}

module.exports = handleStatus;