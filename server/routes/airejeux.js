var express = require('express');
var router = express.Router();
var airejeux = require('../models/airejeux')
var airejeuxService = require('../services/airejeux')

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:9000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); 

router.get('/', getAll);
router.get('/:_id', getById)

function getAll(req, res, next) {
  airejeuxService.getAll()
    .then(airejeux => res.json(airejeux))
    .catch(err => next(err));
}

function getById(req, res, next) {
  airejeuxService.getById(req.params._id)
    .then(airejeux => airejeux ? res.json(airejeux) : res.sendStatus(404))
    .catch(err => next(err));
}


module.exports = router;