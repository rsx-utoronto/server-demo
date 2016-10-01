var basicserver = require('./basicserver'); 
var serial = require('./serial_connection');

model = {led: 500, pot: 300}
basicserver.init(model);
serial.init(model); 