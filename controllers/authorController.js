const Author = require('../models/authorModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory')


exports.createAuthor = (req, res) => {
    res.status(500).json({
        status: 'error',
        data: 'This route is not yet defined'
    });
};

exports.getAuthor = factory.getOne(Author);
exports.getAllAuthors = factory.getAll(Author);

// Do NOT update passwords with this!
exports.updateAuthor = factory.updateOne(Author);
exports.deleteAuthor = factory.deleteOne(Author);
