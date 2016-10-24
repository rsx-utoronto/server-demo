var SerialPort = require("serialport");
var Promise = require('bluebird');

var getSerialPorts = Promise.promisify(SerialPort.list);

init = function(model, config) {
	getSerialPorts()
	.then(portInfo => {
		var port = new SerialPort(portInfo[0].comName,
		{
			parser: SerialPort.parsers.byteLength(6)
		});
		console.log('-> started serial port on ', portInfo[0].comName);
		port.on('data', function(data) {
			console.log(data.toString())
			potValue = /sensor = (\d+)/.exec(data.toString())[1];
			model.pot = potValue;

			if (config.verbose)
				console.log('<', data.toString(), '| led:', model.led, '>');
			port.write(model.led.toString());
		});
	})
}


module.exports = {init};