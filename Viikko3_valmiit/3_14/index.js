require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser') 
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const Persons = require('./models/person')

app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(cors())
app.use(express.static('build'))


app.get('/api/persons', (request, response) => {
  Persons.find({}).then(persons2 => {
    response.json(persons2.map(person => person.toJSON()))
  })
})

app.get('/api/persons/:id', (request, response) => {
  Persons.findById(request.params.id).then(person => {
    response.json(person.toJSON())
  })
  .catch(error => {
    console.log(error);
    response.status(404).end()
  })
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  names = names.filter(name => name.id !== id)
  response.status(204).end()
})

app.use(morgan('tiny', {
    skip: function (req, res) {
        return res.statusCode >= 400
    }, stream: process.stdout
}));

app.post('/api/persons', (request, response) => {
  const body = request.body


  if (body.name === undefined) {
    return response.status(400).json({ error: 'name is missing' })
  }
  if (body.number === undefined) {
      return response.status(400).json({ error: 'number is missing' })
  }

  const person = new Persons({
    id: Math.floor(Math.random() * 999),
    name: body.name,
    number: body.number,
  })

    person.save().then(savedName => {
    response.json(savedName.toJSON())
  })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})