const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const session = require('express-session')
const config = require('./config/config')

const app = express()

const mongodb_url =
  'mongodb+srv://antonyraj250199:rajadhoni@cluster0.okr73.mongodb.net/Movie_app?retryWrites=true&w=majority'
mongoose.connect(mongodb_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection
db.on('error', () => console.log('DB not connected'))
db.once('open', () => console.log('Db connected'))
var corsOptions = {
  origin: '*',
}
app.use(cors(corsOptions))
app.use(express.json())

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET',
  }),
)
app.use(express.urlencoded({ extended: true }))

app.get('/welcome_page', (req, res) => {
  res.json({ message: 'Welcome to movie application services.' })
})

require('./routes/movie.router')(app)

const PORT = process.env.PORT || 7000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
