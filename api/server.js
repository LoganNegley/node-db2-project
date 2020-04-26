const express = require('express');
const carsRouter = require('../cars/carsRouter');


const server= express();
server.use('/api/cars', carsRouter);
server.use(express.json());

server.get('/', (req,res) =>{
    res.status(200).json({api: 'UP!!!!!'})
});

module.exports = server;