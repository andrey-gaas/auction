const { Schema, model } = require('mongoose');

const schema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  lastUser: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = model('Lots', schema);