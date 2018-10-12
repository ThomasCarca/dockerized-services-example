var express = require('express');
var router = express.Router();
var parkingvelo = require('../models/parkingvelo')
var parkingveloService = require('../services/parkingvelo')

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:9000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); 

router.get('/', getAll);
router.get('/:_id', getById)

function getAll(req, res, next) {
  parkingveloService.getAll()
    .then(parkingvelo => res.json(parkingvelo))
    .catch(err => next(err));
}

function getById(req, res, next) {
  parkingveloService.getById(req.params._id)
    .then(parkingvelo => parkingvelo ? res.json(parkingvelo) : res.sendStatus(404))
    .catch(err => next(err));
}


module.exports = router;