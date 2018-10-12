var mongoose = require('mongoose');

var BarModel = new mongoose.Schema({
  type: String
});

// Mongoose Model definition
module.exports = mongoose.model('bar', BarModel, 'bar');