var SerialPort = require("serialport");
var port = new SerialPort("COM4", {
	baudRate: 9600
});

init = function(model) {
	port.on('data', function(data) {
		potValue = /sensor = (\d+)/.exec(data.toString())[1]; 
		model.pot = potValue; 
		
		console.log('<', data.toString(), '| led:', model.led, '>');
		port.write(model.led.toString());
	});
}

module.exports = {init}; 