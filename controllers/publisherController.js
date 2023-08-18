const Publisher = require('../models/publisherModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory')


exports.createPublisher = (req, res) => {
    res.status(500).json({
        status: 'error',
        data: 'This route is not yet defined'
    });
};

exports.getPublisher = factory.getOne(Publisher);
exports.getAllPublishers = factory.getAll(Publisher);

// Do NOT update passwords with this!
exports.updatePublisher = factory.updateOne(Publisher);
exports.deletePublisher = factory.deleteOne(Publisher);
