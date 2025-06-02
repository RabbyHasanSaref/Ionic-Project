const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  title: String,
  description: String
});
module.exports = mongoose.model('Test', testSchema, 'test');