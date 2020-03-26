const express = require('express');
const app = express();
const Friend = require('../models/FriendModel')
const User = require('../models/userModel');

//Miranda's attempt with .populate. Is displaying all info of user and friend. Have not been able to filter it. changed friends.hbs.No succes.  Added friendmodel to solve it,  no succes
//To test: add a friend to the account you are testing it with first. 
app.get('/friends', (req, res) => {
  User.find()
    .populate('friend') 
    .then(friendsData => {
      res.render('user/friends.hbs', { friendsHbs: friendsData });
    })
    .catch(err => {
      console.log(err);
    });
});


// Jurgen & Frankie's attempt:
// // Displaying ALL the friends from the user database
app.get('/friends', (req, res) => {
  User.find({}).then(friendsData => {
    res.render('user/friends', { friendsHbs: friendsData });
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
  });
});

module.exports = app;
