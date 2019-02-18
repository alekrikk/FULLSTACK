const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    if (!returnedObject.likes) {
     returnedObject.likes = 0
    }
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Blog', noteSchema)