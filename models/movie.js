const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  movie_name: String,
  rating: Number,
  cast: Array,
  genre: String,
  release_date: Date,
})

const movie = mongoose.model('movie', movieSchema)
module.exports = movie
