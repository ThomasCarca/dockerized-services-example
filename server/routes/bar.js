var express = require('express');
var router = express.Router();
var bar = require('../models/bar')
var barService = require('../services/bar')

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:9000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); 

router.get('/', getAll);
router.get('/:_id', getById)

function getAll(req, res, next) {
  barService.getAll()
    .then(bar => res.json(bar))
    .catch(err => next(err));
}

function getById(req, res, next) {
  barService.getById(req.params._id)
    .then(bar => bar ? res.json(bar) : res.sendStatus(404))
    .catch(err => next(err));
}


module.exports = router;