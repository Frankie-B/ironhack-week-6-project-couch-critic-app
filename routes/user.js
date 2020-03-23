const express = require('express');
const app = express();
// const User = require('../models/UserModel');
const bcrypt = require('bcrypt');

// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });

// GET request for user route
app.get('/signup', (req, res) => {
  res.render('user/signup');
});

module.exports = app;
