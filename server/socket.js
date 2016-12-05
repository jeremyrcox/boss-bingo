const WebSocketServer = require('ws').Server;
const uuid = require('uuid/v4');

const connections = new Map();

function broadcast(message) {
  let broadcastMessage = message;
  if (typeof broadcastMessage !== 'string'){
    broadcastMessage = JSON.stringify(message);
  }

  connections.forEach((socket) => {
    socket.send(broadcastMessage);
  });
}

module.exports = function (server) {
  const wss = new WebSocketServer({ server });

  wss.on('connection', (socket) => {
    const id = uuid();
    connections.set(id, socket);
    console.log('connections: %s', connections.size);

    socket.on('message', (message) => {
      console.log('received: %s', message);
    });

    broadcast({ players: connections.size });

    socket.on('close', () => {
      connections.delete(id);
      broadcast({ players: connections.size });
    });
  });
};
