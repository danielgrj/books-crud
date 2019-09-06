const { model, Schema } = require('mongoose');

const bookScheam = new Schema(
  {
    title: String,
    description: String,
    author: String,
    raiting: Number
  },
  {
    timestamps: true
  }
);

module.exports = model('Book', bookScheam);
