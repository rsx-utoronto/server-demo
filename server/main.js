var program = require('commander') // command line arguments to control which systems are enabled
 .usage('node main.js [options]')
 .option('-s, --serial', 'Enable arduinos connected over serial')
 .option('-v, --verbose', 'Enable verbose debugging')
 .parse(process.argv)
 // add logging options

var api = require('./basic_server');
var system = program.serial ? require('./serial_connection') : require('./dummy_system');

console.log('Starting server, loading modules ...');
model = {led: 500, pot: 300};
api.init(model);
system.init(model, program);

console.log('Started server!');