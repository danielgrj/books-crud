const Book = require('../models/Book');

exports.createBookForm = (req, res) => {
  res.render('books');
};

exports.createBook = async (req, res) => {
  const { title, description, author, raiting } = req.body;
  await Book.create({ title, description, author, raiting });
  res.redirect('/');
};

exports.editBookForm = async (req, res) => {
  const book = await Book.findById(req.query.bookid);
  res.render('edit', { book });
};

exports.editBook = async (req, res) => {
  const { title, description, author, raiting } = req.body;
  await Book.findByIdAndUpdate(req.query.bookid, { title, description, author, raiting });
  res.redirect('/');
};
