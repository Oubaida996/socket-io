'use strict';
const Chance =require('chance');

const chance =new Chance();

const socket =require('socket.io-client');


const host ='http://localhost:3000';

const io =socket.connect(host);


io.emit('order' ,chance.company())



