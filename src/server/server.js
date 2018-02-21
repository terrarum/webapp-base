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

  return app;
};

export default {
  create,
};
