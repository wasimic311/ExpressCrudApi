const express = require('express');
const { appendFile } = require('fs');

const router = express.Router();


router.get('/', (req, res) => {

    res.send('Posts');
});






module.exports = router;