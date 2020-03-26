// Extended User Model with relations.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    // friends: [{ type: ObjectId, ref: 'users' }],
  },
  {
    rated_movies: [
      {
        // movie_rate: imdbID,
        title: String,
        thumbnail: String,
        director: String,
        year: Number,
        rate: Number,
      },
    ],
  },
  {
    timestamps: true, // display time stamp user is created
  }
);

module.exports = mongoose.model('User', userSchema);
