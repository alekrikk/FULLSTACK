import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
            {
                name: 'Reactin perusteet',
                exercises: 10
            },
            {
                name: 'Tiedonvälitys propseilla',
                exercises: 7
            },
            {
                name: 'Komponenttien tila',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.course.name}</h1>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part={props.course.parts[0]} />
            <Part part={props.course.parts[1]} />
            <Part part={props.course.parts[2]} />
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            Yhteensä {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises} tehtävää
            </div>
    )
}

const Part = (props) => {
    return (
        <div>
            {props.part.name} {props.part.exercises}
        </div>

    )
}



ReactDOM.render(<App />, document.getElementById('root'))
