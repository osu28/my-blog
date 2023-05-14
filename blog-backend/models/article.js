const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
  // add other fields as necessary
});

module.exports = mongoose.model('Article', articleSchema);
