import ReactDOM from 'react-dom'
import React, { useState } from 'react'


const Name = ({ note }) => {
    return (
        <li>{note.name}</li>
    )
}

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])
    const [newName, setNewName] = useState('Uusi nimi')

    const Names = () => persons.map(note =>
        <Name
            key={note.name}
            note={note}
        />
    )

    const addName = (event) => {
        event.preventDefault()
        if (persons.includes(events)) {
            return 0
        }
        const nameObject = {
            name: newName
        }
        setPersons(persons.concat(nameObject))
        setNewName('')
    }

    const handleAddName = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    return (
        <div>
            <h2>Puhelinluettelo</h2>
            <form onSubmit={addName}>
                <div>
                    nimi: <input
                        value={newName}
                        onChange={handleAddName}
                    />
                </div>
                <div>
                    <button type="submit">lisää</button>
                </div>
            </form>
            <h2>Numerot</h2>
            {Names()}
    </div>
    )

}

export default App

ReactDOM.render(
    <App />,
    document.getElementById('root')
)