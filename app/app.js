
	var appSettings = require('./util/settings');
	
	var Charlatan = require('charlatan');
	 
	// create a stdout and file logger
	// create a custom timestamp format for log statements
	const SimpleNodeLogger = require('simple-node-logger'),
		  loggerOpts = {
			  logFilePath : appSettings.filename,
			  timestampFormat : 'YYYY-MM-DD HH:mm:ss.SSS'
		  },
		  log = SimpleNodeLogger.createSimpleLogger( loggerOpts );
	
	log.setLevel(appSettings.level);
	
	function escribeEnLog() {
		var name    = Charlatan.Name.name();       // Joshua Lemke MD 
		var email   = Charlatan.Internet.email();  // glover_ii@voluptas.name 
		var company = Charlatan.Company.name();    // Wilkinson LLC 
		log.debug(name + ' (' +email + ') from ' + company + ' connected. ');
		setTimeout(function() {
			escribeEnLog();
		}, appSettings.interval);	
	}
	
	escribeEnLog();
	

