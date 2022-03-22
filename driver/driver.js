'use strict';

const socket =require('socket.io-client');


// const host ='http://localhost:3000/vendor';
const host ='http://localhost:3000';

const io =socket.connect(host);

// io.on('driver' ,payload =>{
//     this.payload =payload;
//     console.log(`DRIVER: picked up ${this.payload.orderID}`);
//     console.log('Event :');
//     console.log({
//         event: 'in-transit',
//         time: new Date().toString(),
//         payload: this.payload
//     });
// });

io.emit('driver');
io.emit('driverThx' );
io.emit('delivered');









