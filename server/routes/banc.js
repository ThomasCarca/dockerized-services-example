var express = require('express');
var router = express.Router();
var banc = require('../models/banc')
var bancService = require('../services/banc')

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:9000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); 

router.get('/', getAll);
router.get('/:_id', getById)

function getAll(req, res, next) {
  bancService.getAll()
    .then(banc => res.json(banc))
    .catch(err => next(err));
}

function getById(req, res, next) {
  bancService.getById(req.params._id)
    .then(banc => banc ? res.json(banc) : res.sendStatus(404))
    .catch(err => next(err));
}


module.exports = router;