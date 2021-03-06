var express = require('express')
    , router = express.Router()
    , mongoose = require('mongoose')
    , Todo = require('../models/Todo.js');

/* GET /todos listing. (Get all if nothing specified). */
router.get('/', function (req, res, next) {
    Todo.find(function (err, todos) {
        if (err) return next(err);
        res.json(todos);
    });
});

/* POST /todos */
router.post('/', function (req, res, next) {
    Todo.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* GET /todos/id */
//router.get('/:id', function (req, res, next) {
//    Todo.findById(req.params.id, function (err, post) {
//        if (err) return next(err);
//        res.json(post);
//    });
//});

/* PUT /todos/:id */
router.put('/:id', function (req, res, next) {
    Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /todos/:id */
router.delete('/:id', function (req, res, next) {
    Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.get('/:note', function (req, res, next) {
    Todo.find({ note: req.params.note }, function (err, todos) {
        if (err) return next(err);
        res.json(todos);
    });
});

console.log('todos loaded');

module.exports = router;