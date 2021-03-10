const express = require('express');
const router = express.Router();
const connection = require('../database');

// SHOW ALL BOOKS

router.get('/', function(request, response) {
    connection.query('SELECT * FROM book', 
    (err,result) => {
        if (err) {
            response.status(500).json(err);
        } else {
            response.status(200).json(result);
        }
    });
});

module.exports = router;