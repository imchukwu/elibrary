const Book = require('../models/bookModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory')


exports.createBook = (req, res) => {
    res.status(500).json({
        status: 'error',
        data: 'This route is not yet defined'
    });
};

exports.getBook = factory.getOne(Book);
exports.getAllBooks = factory.getAll(Book);

// Do NOT update passwords with this!
exports.updateBook = factory.updateOne(Book);
exports.deleteBook = factory.deleteOne(Book);
