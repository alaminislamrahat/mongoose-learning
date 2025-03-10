const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const todoSchema = require('../schemas/todoSchema')
const Todo = new mongoose.Model("Todo",todoSchema);

//get all todos
router.get('/', async(req, res) => {
    
})
//get a todo
router.get('/:id', async(req, res) => {

})
//post a todo
router.post('/', async(req, res) => {

})
//post multiple todos
router.post('/all', async(req, res) => {

})
//put  todo
router.put('/:id', async(req, res) => {

})
//delete a todo
router.delete('/:id', async(req, res) => {

})

module.exports = router;