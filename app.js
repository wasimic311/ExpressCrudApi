const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
mongoose.set('strictQuery', true);


//Middelware
app.use(bodyParser.json())

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res) => {

    res.send('Home');
});






//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to DB!');
});

//Start listening
app.listen(3000);