var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

var cors = require('cors');
app.use(cors({origin: 'http://localhost:8000'}));

function init(model) {
	var ledRouter = express.Router();
	ledRouter.get('/value', (request, response) => {
		console.log('response is', {value: model.led});
		response.json({value: model.led});
	});
	ledRouter.put('/value/:val', (request, response) => {
		console.log('made post request', request.params.val)
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

	app.listen(port);
}


module.exports = {init};
