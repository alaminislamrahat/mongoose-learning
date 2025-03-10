const express = require('express');
const mongoose = require('mongoose');
const todoHandler = require('./routHandler/todoHandler');


const app = express();

app.use(express.json());

const port = 5000;

const uri = "mongodb+srv://mongooseUser:Afyk9jaNAPAlN9rJ@cluster0.3jkraio.mongodb.net/TodoDb";

mongoose.connect(uri)
    .then(() => console.log('connection success fully'))
    .catch(err => console.log(err))

app.use('/todo',todoHandler)



// default error handlers
const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500).json({ error: err })
}

app.listen(port, () => {
    console.log(`app running on ${port}`)
})