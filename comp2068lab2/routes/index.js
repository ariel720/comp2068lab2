'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. ?method=add&x=16&y=4*/
router.get('/', function (req, res) {
    
    var method = req.query.method;
    var x = req.query.x;
    var y = req.query.y;
    var result = 0;
    
    if (method == 'add') {
        result = parseInt(x) + parseInt(y);
    } else if (method == 'subtract') {
        result = parseInt(x) - parseInt(y);
    } else if (method == 'multiply') {
        result = parseInt(x) * parseInt(y);
    } else if (method == 'divide') {
        result = parseInt(x) / parseInt(y);
    }


    console.log(result);
    res.render('index', { title: 'Express' });
});

module.exports = router;
