// command line arguments to control which systems are enabled
var program = require('commander')
 .usage('node main.js [options]')
 .option('-s, --serial', 'Enable arduinos connected over serial')
 // add logging options


var api = require('./basic_server');
var system = program.serial ? require('./serial_connection') : require('./dummy_system');

model = {led: 500, pot: 300};
api.init(model);
system.init(model);