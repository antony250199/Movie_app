module.exports = (app) => {
  const controllers = require('../controllers/movie.controller')

  const route = require('express').Router()

  route.post('/create_movie', controllers.create_movie)
  route.get('/get_movies', controllers.get_movies_list)
  route.get('/get_movie/:id', controllers.get_movie)
  route.put('/update_movie/:id', controllers.update_movie)
  route.delete('/delete_movie/:id', controllers.delete_movie)

  app.use('/movieApi', route)
}
