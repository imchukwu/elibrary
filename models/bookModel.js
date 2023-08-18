const mongoose = require('mongoose');
const slugify = require('slugify');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A book must have a title'],
        trim: true,
    },
    slug: String,
    isbn: {
        type: String,
        required: [true, 'A book must have an ISBN value']
    },
    description:  {
        type: String,
        trim: true
    },
    imageCover:  {
        type: String,
        required: [true, 'A book must have an image cover url']
    },
    content: {
        type: String,
        required: [true, 'A book must have content']
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    },
    publishedAt: {
        type: Date,
        required: [true, 'A book must have a published date']
    },
    author: [{ 
        type: String,
        required: [true, 'A book must have an author']
    }],
    publisher: {
        type: String,
        required: [true, 'A book must have a publisher']
    },
    // author: [
    //     { 
    //         type: mongoose.Schema.ObjectId,
    //         ref: 'Author'
    //     }
    // ],
    // publisher: [
    //     { 
    //         type: mongoose.Schema.ObjectId,
    //         ref: 'Publisher'
    //     }
    // ],

}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});


const Book = mongoose.model('Book', bookSchema);

module.exports = Book;