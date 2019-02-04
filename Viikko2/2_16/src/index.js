import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'
import noteService from './services/persons'


const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)



const Person = ({ person }) => {
    const i = person.id
    return (
        <li>{person.name} {person.number} </li>
    )
}

const Persons = ({ persons }) => persons.map(person =>
    <Person
        key={person.name}
        person={person}
    />
)


const App = () => {
    const [persons, setPersons] = useState([])

    useEffect(() => {
        noteService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }, [])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const nameObject = {
            name: newName, number: newNumber
        }
        if (persons.some(e => e.name === newName)) {
            return window.alert(`${newName} on jo luettelossa`)
        }


        noteService
            .create(nameObject)
        setPersons(persons.concat(nameObject))
        setNewName('')
        setNewNumber('')
    }


    const handleAddName = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleAddNumber = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    return (
        <div>
            <h2>Puhelinluettelo</h2>
            <h2>Lisää uusi</h2>
            <form onSubmit={addPerson}>
                <div>
                    nimi: <input
                        value={newName}
                        onChange={handleAddName}
                    />
                </div>
                <div>numero: <input
                    value={newNumber}
                    onChange={handleAddNumber}
                />
                </div>
                <div>
                    <button type="submit">lisää</button>
                </div>
            </form>
            <h2>Numerot</h2>
            <Persons persons={persons} />

        </div>
    )
}

export default App

ReactDOM.render(
    <App />,
    document.getElementById('root')
)