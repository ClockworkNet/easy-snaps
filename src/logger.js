/* global console */
/* eslint no-console: "off" */
var logger = function() {
	const levels = {
		debug : 3,
		warn  : 2,
		error : 1,
		off   : 0
	};
	let log_level = 'debug';

	this.setLogLevel = function(new_level) {
		log_level = new_level;
		return log_level;
	};
	this.debug = function(...messages) {
		log('debug', ...messages);
	};
	this.error = function(...messages) {
		log('error', ...messages);
	};
	this.warn = function(...messages) {
		log('warn', ...messages);
	};
	function log(level, ...messages) {
		if( levels[log_level] === level['off'] ) {
			return;
		}
		if( levels[level] <= levels[log_level] ) {
			console.log(...messages);
		}
	}
};

export default new logger();
