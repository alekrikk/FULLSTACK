const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url =
  `mongodb+srv://alekrikk:${password}@cluster0-iqbjz.mongodb.net/phonebookApp?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true })

const noteSchema = new mongoose.Schema({
  id: Number,
  name: String,
  number: String,
})

const Persons = mongoose.model('Persons', noteSchema)

if (name != undefined && number != undefined) {
const person = new Persons({
  id: Math.floor(Math.random() * 999),
  name: name,
  number: number,
})
person.save().then(response => {
  console.log('lisätään', name, 'numero', number, 'luetteloon');
  mongoose.connection.close()
})

}

if (name === undefined && number === undefined) {
  console.log('puhelinluettelo:')
  Persons.find({}).then(result => {
    result.forEach(person => {
      console.log(person.name, person.number)
    })
    mongoose.connection.close()
  })

}
