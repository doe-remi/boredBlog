const { model, Schema } = require('mongoose');

module.exports = model(
  'Blog',
  new Schema({
    blog: {
      type: String,
      required: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user"
    }

  })
);

