import http from 'http';
import socketIO from 'socket.io';

import app from './server';

const PORT = process.env.port || 5000;

const server = http.createServer(app.create());
const io = socketIO(server);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});

io.on('connection', (socket) => {
  console.log(socket.id);
});

