var express = require('express');
var router = express.Router();
var bus = require('../models/bus')
var busService = require('../services/bus')

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:9000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); 

router.get('/', getAll);
router.get('/:_id', getById)

function getAll(req, res, next) {
  busService.getAll()
    .then(bus => res.json(bus))
    .catch(err => next(err));
}

function getById(req, res, next) {
  busService.getById(req.params._id)
    .then(bus => bus ? res.json(bus) : res.sendStatus(404))
    .catch(err => next(err));
}


module.exports = router;