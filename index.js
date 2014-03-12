
module.exports = function (){
	
	var startTime = Date.now();

	return function clog(){
		var logTime = ((Date.now() - startTime) / 1000).toFixed(3)+"s - ";
        var partialConsole = console.log.bind(console, logTime);
        return partialConsole.apply(console, arguments);
	};
}();
