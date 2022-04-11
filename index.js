// Modules and Globals
const express = require('express')
const methodOverride = require('method-override')

//Dependencies and Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
  () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

//Middleware
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//Routes
app.get('/', (req, res) => {
  res.render('home')
})

app.use('/places', require('./controllers/places'))

//404 Page
app.get('*', (req, res) => {
    res.render('error404')
})

//Listener
app.listen(process.env.PORT)