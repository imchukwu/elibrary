const Book = require('../models/bookModel');
const User = require('../models/userModel');
const AppError = require('../utils/appError');
// const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync( async(req, res, next) => {
    //1) Get Book Data
    const books = await Book.find();
    //3) Render Template using the book data
    res.status(200).render('overview', {
        title: 'All Books',
        books
    });
});

exports.getBook = catchAsync( async(req, res, next) => {
    // 1) Get the data, for the requested book (including reviews and guides)
  const book = await Book.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user'
  });

  if (!book) {
    return next(new AppError('There is no book with that name.', 404));
  }

  // 2) Build template
  // 3) Render template using data from 1)
  res.status(200)
  .render('book', {
    title: `${book.name} Book`,
    tour
  });
});


exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account'
  });
};

exports.getAccount = (req, res) => {
  res.status(200).render('account', {
    title: 'Your account'
  });
};

exports.updateUserData = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    {
      name: req.body.name,
      email: req.body.email
    },
    {
      new: true,
      runValidators: true
    }
  );

  res.status(200).render('account', {
    title: 'Your account',
    user: updatedUser
  });
});
