const config = require('./utils/config')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const blogsRouter = require('./controllers/blogs')
const mongoose = require('mongoose')

console.log('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

app.use(bodyParser.json())

app.use('/api/blogs', blogsRouter)

module.exports = app