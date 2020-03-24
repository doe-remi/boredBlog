const { model, Schema } = require('mongoose');

module.exports = model(
  'Blog',
  new Schema({
    text: {
      type: String,
      required: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user"
    }

  })
);

