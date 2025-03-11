const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const todoSchema = require('../schemas/todoSchema')
const Todo = new mongoose.model("Todo", todoSchema);

//get all todos
router.get('/', async (req, res) => {

})
//get a todo
router.get('/:id', async (req, res) => {

})
//post a todo
router.post('/', async (req, res) => {
    try {
        const newTodo = new Todo(req.body);
        await newTodo.save(); // No callback needed

        res.status(200).json({
            message: "Todo was inserted successfully"
        });
    } catch (err) {
        res.status(500).json({
            error: "There was a server-side error"
        });
    }
});
//post multiple todos
router.post('/all', async (req, res) => {
    try {
        await Todo.insertMany(req.body)
        res.status(200).json({
            message: "Todo was inserted successfully"
        });
    }
    catch (err) {
        res.status(500).json({
            error: "There was a server-side error"
        });
    }
})
//put  todo
router.put('/:id', async (req, res) => {
try{
    const result = await Todo.findByIdAndUpdate({_id : req.params.id},{
        status : "inactive"
    },{new : true})
    res.status(200).json({
        message: "Todo was inserted successfully"
    });
    console.log(result)
}
catch (err) {
    res.status(500).json({
        error: "There was a server-side error"
    });
}

})
//delete a todo
router.delete('/:id', async (req, res) => {

})

module.exports = router;