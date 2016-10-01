var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

var cors = require('cors');


function init(model) {
	var ledRouter = express.Router();
	ledRouter.get('/value', (request, response) => {
		console.log('response is', {value: model.led});
		response.json({value: model.led});
	});
	ledRouter.put('/value/:val', (request, response) => {
		console.log('made post reques   t', request.params.val)
		model.led = request.params.val;
		response.json({value: model.led});
	});
	app.use('/led', ledRouter);

	var potRouter = express.Router();
	potRouter.get('/value', (request, response) => {
		console.log('response is', {value: model.pot});
		response.json({value: model.pot});
	});
	app.use('/pot', potRouter);


function init() {
    app.listen(port)
    console.log('started on port', port)
}

module.exports = {init};
