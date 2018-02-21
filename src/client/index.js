import io from 'socket.io-client';
import 'whatwg-fetch';

import './index.scss'; // eslint-disable-line

import common from '../common';

const socket = io();

socket.emit('connection');

// Hit the server API.
fetch('/api')
  .then(response => response.json())
  .then(body => console.log(body));

socket.on('hello', response => console.log(response));

common.init();
console.log('wow');
