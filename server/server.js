const express = require('express');
const words = require('./words');
const config = require('../config');

let app = express();

app.get('/words', function(req, res){
    res.send(words());
});

app.get('/settings', function(req, res){
	res.json(config.public);
});

app.use(express.static( __dirname + '/../dist'));

app.listen(config.port, function () {
  console.log(`App listening on port ${config.port}!`);
});