var mongoose = require('mongoose');

var BancModel = new mongoose.Schema({
  type: String
});

// Mongoose Model definition
module.exports = mongoose.model('banc', BancModel, 'banc');