import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';


const Person = ({ person }) => {
    return (
        <p>{person.name} </p>
    )
}

const Language = ({ language }) => {
    return (
        <li>{language.name}</li>
    )
}


const Languages = ({ languages }) => languages.map(language =>
    <Language
        key={language.name}
        language={language}
    />
)

const Person2 = ({ person }) => {
    return (
        <div>
        <h1>{person.name} </h1>
        <p>capital {person.capital}</p>
        <p>population {person.population}</p>
        <h2>languages </h2>
        <Languages languages={person.languages}/>
        <p></p>
        <img src={person.flag} alt="" height="70" width="100" />
        </div>
    )
}


const Persons = (props) => {
    console.log(props.persons.length)
    if (props.persons.length > 10) {
        return (
            <p>Too many matches, specify another file</p>
        )
    }
    if (props.persons.lenght > 0 && props.persons.lenght < 2) {
        return (
            props.persons.map(person =>
                <Person2
                    key={person.name}
                    person={person}
                />
            )
        )
    }
    
    return (
        props.persons.map(person =>
            <Person
                key={person.name}
                person={person}
            />
        )
    )
}


const App = () => {
    const [persons, setPersons] = useState([])
    const [filteredPersons, setFilteredPerson] = useState([])
    const [newName, setNewName] = useState('')

    

    useEffect(() => {
      axios.get('https://restcountries.eu/rest/v2/all').then(response => {
        setPersons(response.data)
      })
    }, [])

    const handleAddName = (event) => {
        
        setNewName(event.target.value)
        setFilteredPerson(persons.filter(person => String(person.name).includes(newName)))
    }

    return (
        <div>
                <div>
                    nimi: <input
                        value={newName}
                        onChange={handleAddName}
                    />
                    <Persons persons={filteredPersons}/>
                </div>
        </div>
    )

}

export default App

ReactDOM.render(
    <App />,
    document.getElementById('root')
)