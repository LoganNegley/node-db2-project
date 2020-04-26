const express = require('express');
const knex = require('knex');
const db = require('../data/db.config');


const router = express.Router();

router.get('/', (req,res) =>{
db.select().from('cars')
.then(cars =>{
    res.status(200).json(cars)
})
.catch(error =>{
    res.status(500).json({
        errorMessage: 'Unable to get car information'
    })
})
});

module.exports = router;