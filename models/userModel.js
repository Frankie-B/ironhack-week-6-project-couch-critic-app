// Extended User Model with relations.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      validate: {
        validator: function(v) {
          return /^[A-Za-z]+$/.test(v);
        },
        message: props => `${props.value} is not a valid name!`,
      },
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      validate: {
        validator: function(v) {
          return /^[A-Za-z]+$/.test(v);
        },
        message: props => `${props.value} is not a valid name!`,
      },
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      validate: {
        validator: function(v) {
          return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            v
          );
        },
        message: props => `${props.value} is not a valid email!`,
      },
      required: true,
    },
    username: {
      type: String,
      trim: true,
      validate: {
        validator: function(v) {
          return /[A-Za-z0-9_]{1,15}/.test(v);
        },
        message: props => `${props.value} is not a valid username!`,
      },
      required: true,
    },
    password: { type: String, trim: true, required: true },
    movies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'movies',
      },
    ],
  },

  // {
  //   //friends: [{ type: ObjectId, ref: 'users' }],
  // },
  // {
  //   rated_movies: [
  //     {
  //       // movie_rate: imdbID,
  //       title: String,
  //       thumbnail: String,
  //       director: String,
  //       year: Number,
  //       rate: Number,
  //     },
  //   ],
  // },
  {
    timestamps: true, // display time stamp user is created
  }
);

module.exports = mongoose.model('User', userSchema);
