var namer = require('./namer/namer.js');
var bodyParser = require('body-parser');

var express = require('express')
var app = express();

app.use(bodyParser());

app.post('/names', function(req, res) {
	console.log('Get request');
	console.log(req.body);
	var namerResult = namer.sayName(req.body.name, req.body.surname);

	if (namerResult) {
		res.status(200);
		res.send(namerResult);
	} else {
		res.status(400);
		res.send({error: ' Bad params '});
	}
});
 
app.listen(3000)