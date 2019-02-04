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
    const [newName, setNewName] = useState('')

    const Names = () => persons.map(note =>
        <Name
            key={note.name}
            note={note}
        />
    )

    const addName = (event) => {
        event.preventDefault()
        const nameObject = {
            name: newName
        }
        if (persons.some(e => e.name === newName)) {
            return window.alert(`${newName} on jo luettelossa`)
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