/* eslint-disable import/newline-after-import */
const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Book = require('../../models/bookModel');
// const Author = require('../../models/authorModel');
// const Review = require('../../models/reviewModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFinAndModify: false
}). then(() => console.log('DB Connection succesful'));

//READ JSON FILE
const books = JSON.parse(fs.readFileSync(`${__dirname}/books.json`, 'utf-8'));
// const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'));
// const authors = JSON.parse(fs.readFileSync(`${__dirname}/authors.json`, 'utf-8'));

//IMPORT DATA TO DATABASE
const importData = async () => {
    try{
        await Book.create(books);
        // await User.create(users, { validateBeforeSave: false });
        // await Author.create(authors);
        console.log('Data Successfully Loaded')
    }catch(err) {
        console.log(err);
    }
    process.exit();
};

//DELETE ALL DATA TO COLLECTION
const deleteData = async () => {
    try{
        await Book.deleteMany();
        // await User.deleteMany();
        // await Author.deleteMany();
        console.log('Data Successfully Deleted');
    }catch(err) {
        console.log(err);
    }
    process.exit();
};

if(process.argv[2] === '--import'){
    importData();
} else if(process.argv[2] === '--delete'){
    deleteData();
}
