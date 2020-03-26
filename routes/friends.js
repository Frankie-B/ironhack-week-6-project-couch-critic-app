const express = require('express');
const app = express();

const User = require('../models/userModel');

// Displaying ALL the friends from the user database
app.get('/friends', (req, res) => {
  User.findById(req.session.currentUser._id)
    .populate('friends')
    .then(user => {
      res.render('user/friends', { friends: user.friends });
    });
});

// Displaying the details for a single friend from the database
app.get('/friend/:friendId', (req, res) => {
  User.findById(req.params.friendId)
    .then(friendData => {
      res.render('user/friend', { friend: friendData });
    })
    .catch(error => {
      console.log('Could not find friend: ', error);
    });
});

app.get('/add/:userId', (req, res) => {
  User.findByIdAndUpdate(req.session.currentUser._id, {
    $push: { friends: req.params.userId },
  })
    .then(user => {
      return User.findByIdAndUpdate(req.params.userId, {
        $push: { friends: req.session.currentUser._id },
      });
    })
    .then(user => {})
    .catch(err => {});
});

module.exports = app;
