const express = require('express')
const bodyParser = require('body-parser') 
const morgan = require('morgan')
const app = express()



let names = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '045-1236543',
  },
  {
    id: 2,
    name: 'Arto Järvinen',
    number: '041-21423123',
  },
  {
    id: 3,
    name: 'Lea Kutvonen',
    number: '040-4323234',
  },
  {
    id: 4,
    name: 'Martti Tienari',
    number: '09-784232',
  }
]

app.use(bodyParser.json())
app.use(morgan('tiny'))


app.get('/api/persons', (req, res) => {
  res.json(names)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const name = names.find(name => name.id === id)

  if (name) {
    response.json(name)
  } else {
    response.status(404).end()
  }
})

app.get('/info', (req,res) => {
    const info = "Puhelinluettelossa " + 4 + " henkilön tiedot"
    res.send(info)
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
  const person = names.find(person => person.name === body.name)

  if (person) {
    return response.status(400).json({ error: 'name must be unique' })
  }
  if (body.name === undefined) {
    return response.status(400).json({ error: 'name is missing' })
  }
  if (body.number === undefined) {
      return response.status(400).json({ error: 'number is missing' })
  }
  const name = {
    id: Math.floor(Math.random() * 999),
    name: body.name,
    number: body.number,
  }
  names = names.concat(name)
  response.json(name)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})