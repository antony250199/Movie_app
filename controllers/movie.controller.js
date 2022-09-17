const movie_model = require('../models/movie')

exports.create_movie = (req, res) => {
  let data = {
    movie_name: req.body.movie_name,
    rating: req.body.rating,
    cast: req.body.cast,
    genre: req.body.genre,
    release_date: req.body.release_date,
  }

  movie_model
    .create(data)
    .then((response) => {
      if (response) {
        return res.json({ status: 1, message: 'Movie created successfully' })
      }
    })
    .catch((err) => {
      console.log(err)
      return res
        .status(400)
        .json({ status: 0, message: 'Unable to add movie', error: err })
    })
}

exports.get_movies_list = (req, res) => {
  movie_model
    .find({})
    .then((response) => {
      res.json({
        status: 1,
        message: 'Movies list found successfully',
        list: response,
      })
    })
    .catch((err) => {
      console.log(err)
      return res.status(400).json({
        status: 0,
        message: 'Unable to get list of movies',
        error: err,
      })
    })
}

exports.get_movie = (req, res) => {
  movie_model
    .findOne({ _id: req.params.id })
    .then((response) => {
      res.json({
        status: 1,
        message: 'Movie found successfully',
        data: response,
      })
    })
    .catch((err) => {
      return res
        .status(400)
        .json({ status: 0, message: 'Unable to get movie data', error: err })
    })
}

exports.update_movie = (req, res) => {
  let data = {
    movie_name: req.body.movie_name,
    rating: req.body.rating,
    cast: req.body.cast,
    genre: req.body.genre,
    release_date: req.body.release_date,
  }
  movie_model
    .updateOne({ _id: req.params.id }, data)
    .then((resp) => {
      if (res) {
        res.json({ status: 1, message: 'Movie updated successfully' })
      } else {
        res.json({
          status: 0,
          message: `Unable to update movie with this id ${req.params.id}`,
        })
      }
    })
    .catch((err) => {
      console.log(err)
      return res
        .status(400)
        .json({ status: 0, message: 'Unable to update movie data', error: err })
    })
}

exports.delete_movie = (req, res) => {
  movie_model
    .deleteOne({ _id: req.params.id })
    .then((response) => {
      res.json({ status: 1, message: 'Movie deleted successfully' })
    })
    .catch((err) => {
      return res
        .status(400)
        .json({ status: 0, message: 'Unable to delete movie', error: err })
    })
}
