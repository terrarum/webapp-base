import io from 'socket.io-client';

import './index.scss'; // eslint-disable-line

import common from '../common';

const socket = io();

socket.emit('connection');

common.init();
console.log('wow');
