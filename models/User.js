const { model, Schema } = require('mongoose');

module.exports = model(
  'User',
  new Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    }
  })
);
