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

router.get('/:id', (req,res) =>{
    db.select().from('cars').where('id', req.params.id)
    .then(car =>{
        if(car && car.length !== 0){
            res.status(200).json(car)
        }else{
            res.status(404).json({
                message:'Car with that ID does not exist'
            })
        }
    })
    .catch(error =>{
        res.status(500).json({
            errorMessage:'Unable to get data'
        })
    })
})

router.post('/', (req,res) =>{
    const payLoad = {
            VIN: req.body.VIN, 
            make:req.body.make, 
            model:carData.model, 
            mileage:carData.mileage, 
            transmission:carData.transmisson, 
            title:carData.title }
    db('cars')
    .insert(payLoad)
    .then(car =>{
        res.status(201).json(car)
    })
    .catch(error =>{
        res.status(500).json({
            errorMessage:'Car info unable to be added'
        })
    })
})

router.put('/:id', (req,res) =>{
    db('cars')
    .where('id', req.params.id)
    .update(req.body)
    .then(car =>{
        if(car && car.length !== 0){
            res.status(200).json(car)
        }else{
            res.status(404).json({
                message: 'Car does not exist with that ID'
            })
        }
    })
    .catch(error =>{
        res.status(500).json({
            errorMessage: 'Unable to update'
        })
    })
})

router.delete('/:id', (req, res) =>{
    db('cars')
    .where('id', req.params.id)
    .del()
    .then(car =>{
        if(car && car.length !== 0){  
            res.status(200).json(car)
        } else{
            res.status(404).json({
                message: 'Car with that ID does not exist'
            })
        }
    })
    .catch(error =>{
        res.status(500).json({
            errorMessage: 'Unable to delete car'
        })
    })
})




module.exports = router;