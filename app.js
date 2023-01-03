const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
mongoose.set('strictQuery', true);
const app = express();



//Routes
app.get('/', (req, res) => {

    res.send('Hello world');
});

app.get('/posts', (req, res) => {

    res.send('Posts');
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to DB!');
});

//Start listening
app.listen(3000);