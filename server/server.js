const server = require('http').createServer();

const express = require('express');

const socket = require('./socket');
const words = require('./words');
const config = require('../config');

const app = express();

app.get('/words', (req, res) => {
  res.send(words());
});

app.get('/settings', (req, res) => {
  res.json(config.public);
});

app.use(express.static(`${__dirname}/../dist`));

socket(server);

server.on('request', app);
server.listen(config.port, () => {
  console.log(`Listening on ${config.port}`);
});
