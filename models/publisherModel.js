const mongoose = require('mongoose');
const slugify = require('slugify');

const publisherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A publisher must have a name'],
        trim: true,
    },
    country: String,
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});


const Publisher = mongoose.model('Publisher', publisherSchema);

module.exports = Publisher;