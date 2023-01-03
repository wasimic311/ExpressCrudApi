const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


router.get('/', (req, res) => {

    res.send('Posts');
});


router.post('/', (req, res) => {
    console.log(req.body);
    //const post = 
});





module.exports = router;