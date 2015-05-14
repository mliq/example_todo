var express = require('express');
var app = express.Router();
var Todo = require('../models/Todo.js');
var path = require('path');

app.get("/", function (req, res, next) {
    res.sendFile(path.resolve(__dirname, '../views/index.html'));
});

app.post("/", function (req, res, next) {
    Todo.create(req.body, function (err, post) {
        //res.json(post);
        //res.sendFile(path.resolve(__dirname, '../views/index.html'));
        res.redirect('/');
    })
});

console.log('index loaded');
module.exports = app;