import http from 'http'
import app from './server'

const PORT = process.env.port || 5000;

const server = http.createServer(app.create());

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});

