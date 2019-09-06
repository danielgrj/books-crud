const express = require('express');
const { home } = require('./../controller/index.controller');
const { createBook, createBookForm, editBookForm, editBook } = require('./../controller/book.controller');
const { catchErrors } = require('./../middlewares/catchErrors');
const router = express.Router();

/* GET home page */
router.get('/', catchErrors(home));

router.get('/books', createBookForm);
router.post('/books', catchErrors(createBook));
router.get('/edit-book', catchErrors(editBookForm));
router.post('/edit-book', catchErrors(editBook));

module.exports = router;
