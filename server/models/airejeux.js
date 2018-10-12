var mongoose = require('mongoose');

var AireJeuxModel = new mongoose.Schema({
  type: String
});

// Mongoose Model definition
module.exports = mongoose.model('airejeux', AireJeuxModel, 'airejeux');