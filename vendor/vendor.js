'use strict';

const socket =require('socket.io-client');


// const host ='http://localhost:3000/vendor';
const host ='http://localhost:3000';

const io =socket.connect(host);

// io.on('vendor' ,payload =>{
//     this.payload =payload;
//     console.log('Event :');
//     console.log({
//         event: 'pickup',
//         time: new Date().toString(),
//         payload: this.payload
//     });
// })


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


io.emit('vendor');
io.emit('vendorThx');

// io.emit('driver' ,this.payload);




