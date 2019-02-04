import React from 'react'

const Course = ({ course }) => {


    const Header = props =>
        <h1>{course.name}</h1>

    const Content = () => course.parts.map(part =>
        <Part
            key={part.id}
            part={part}
        />
    )

    const Part = ({ part }) => {
        return (
            <li>{part.name} {part.exercises}</li>
        )
    }

    const Total = () => {
        const total = course.parts.reduce((s, p) => s += p.exercises, 0)
        return (
            <li>Yhteensä {total} tehtävää</li>
        )
    }
    
    return (
        <div>
            <Header header={course} />
            <ul>
                <Content content={course} />
                <Total total={course.parts} />
            </ul>
        </div>
    )
}

export default Course