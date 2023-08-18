const mongoose = require('mongoose');
const slugify = require('slugify');

const authorSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'An author must have a fisrtname'],
        trim: true,
    },
    middlename: {
        type: String,
        trim: true,
    },
    lastname: {
        type: String,
        required: [true, 'An author must have a lastname'],
        trim: true,
    }
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});


const Author = mongoose.model('Author', authorSchema);

module.exports = Author;