import express from 'express';
import common from '../common';

common.init();

const create = function create() {
  const app = express();

  app.get('/api', (req, res) => {
    res.send({
      message: 'I am a server route!'
    })
  });

  app.use('/', express.static(__dirname + '/'));

  app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
  });
};

export default {
  create,
};
