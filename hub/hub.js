'use strict';

const Chance =require('chance');

const chance =new Chance();

const PORT = 3000;
const socket = require('socket.io');
const io = socket(PORT);
// const vendor = io.of('/vendor');







io.on('connection', (socket2) => {
    
    console.log(`Connected ${socket2.id}`);




    socket2.on('order', (storeName) => {
        console.log('storeName' ,storeName);
        
        this.storeName = storeName;
        this.payload ={
            store: this.storeName,
            orderID: chance.integer({ min: 20, max: 10000 }),
            customer: chance.name(),
            address: chance.address()
          };

          io.emit('pickup');
    });




    socket2.on('vendor' ,() =>{
        // this.payload =payload;
        console.log('Event :');
        console.log({
            event: 'pickup',
            time: new Date().toString(),
            payload: this.payload
        });
    })
    
    
    socket2.on('driver' ,() =>{
        // this.payload =payload;
        console.log(`DRIVER: picked up ${this.payload.orderID}`);
        console.log('Event :');
        console.log({
            event: 'in-transit',
            time: new Date().toString(),
            payload: this.payload
        });
    });


    socket2.on('driverThx' ,() =>{
        console.log(`DRIVER: delivered up  ${this.payload.orderID}`);
        
    });


    socket2.on('vendorThx' ,() =>{
        console.log(`VENDOR: Thank you for delivering  ${this.payload.orderID}`);
        
    });

    socket2.on('delivered' ,() =>{
        // this.payload =payload;
        console.log('Event :');
        console.log({
            event: 'delivered',
            time: new Date().toString(),
            payload: this.payload
        });
    });

    // socket2.emit('vendor' ,this.payload);
    // socket2.emit('driver' ,this.payload);





    // socket2.on('driver' ,payload =>{
    //     this.payload =payload;
    //     console.log('Event :');
    //     console.log({
    //         event: 'in-transit',
    //         time: new Date().toString(),
    //         payload: this.payload
    //     });
    // });





    // vendor.on('connection', (socket) => {
    //     console.log('form vender connection ', socket.id);

    // });

 

});


