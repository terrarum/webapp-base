import express from 'express';
import common from '../common';

common.init();
const app = express();

app.get('/api', (req, res) => {
  res.send({
    message: 'I am a server route and can also be hot reloaded!'
  })
});

export default app;
