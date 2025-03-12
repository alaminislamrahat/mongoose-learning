const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const todoSchema = require('../schemas/todoSchema')
const Todo = new mongoose.model("Todo", todoSchema);

//get all todos
router.get('/', async (req, res) => {
    try {
        const result = await Todo.find({ status: 'active' }).select({ _id: 0 }).limit(2)

        res.status(200).json({
            message: "Todo was inserted successfully",
            result: result
        });
    } catch (err) {
        res.status(500).json({
            error: "There was a server-side error"
        });
    }
})

// get active todos
router.get('/active', async (req, res) => {
    const todo = new Todo();
    const data = await todo.findActives();
    res.json({data})
})
//get a todo
router.get('/:id', async (req, res) => {
    try {
        const result = await Todo.findOne({ _id: req.params.id }); // Add "await" here
        if (!result) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: 'There was an error' });
    }
});
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
    try {
        const result = await Todo.findByIdAndUpdate({ _id: req.params.id }, {
            status: "inactive"
        }, { new: true })
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
    try {
      await Todo.deleteOne({ _id: req.params.id }); // Add "await" here
       
        res.json({message : 'deleted'});
    } catch (err) {
        res.status(500).json({ error: 'There was an error' });
    }
})

module.exports = router;