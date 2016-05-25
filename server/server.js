var express = require('express');
var words = require('./words');

var app = express();

app.get('/words', function(req, res){
    res.send(words());
});

app.use(express.static( __dirname + '/../dist'));

app.listen(3001, function () {
  console.log('App listening on port 3000!');
});