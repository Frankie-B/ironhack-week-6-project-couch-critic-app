const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  Title: String,
  Year: String,
  Director: String,
  Rate: Number
});

const Movie = mongoose.model('movies', movieSchema);

module.exports = Movie;
