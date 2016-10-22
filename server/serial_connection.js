var SerialPort = require("serialport");
var Promise = require('bluebird');

var getSerialPorts = Promise.promisify(SerialPort.list);

init = function(model) {
	getSerialPorts()
	.then(portInfo => {
		var port = new SerialPort(portInfo[0].comName);
		console.log('-> started serial port');
		port.on('data', function(data) {
			potValue = /sensor = (\d+)/.exec(data.toString())[1];
			model.pot = potValue;

			console.log('<', data.toString(), '| led:', model.led, '>');
			port.write(model.led.toString());
		});
	})
}


module.exports = {init};