const Book = require('../models/Book');

exports.home = async (req, res, next) => {
  const books = await Book.find();
  res.render('index', { books });
};
