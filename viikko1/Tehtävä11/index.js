import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {

  const sum = () => (props.good + props.neutral + props.bad)
  const mean = () => (props.good * 1 + props.neutral * 0 + props.bad * (-1)) / (sum())
  const positive = () => ((props.good / (props.good + props.neutral + props.bad)) * 100) + ' %'

  if (sum() === 0) {
    return (
      <div>
        <Header header={'statistiikka'} />
        Ei yhtään palautetta annettu
      </div>
    )
  }
  return (
    <div>
      <Header header={'statistiikka'} />
      <table>
        <tbody>
          <tr>
            <td><Statistic text='hyvä' /></td>
            <td><Statistic value={props.good} /></td>
          </tr>
          <tr>
            <td><Statistic text='neutraali' /></td>
            <td><Statistic value={props.neutral} /></td>
          </tr>
          <tr>
            <td><Statistic text='huono' /></td>
            <td><Statistic value={props.bad} /></td>
          </tr>
          <tr>
            <td><Statistic text='yhteensä' /></td>
            <td><Statistic value={sum()} /></td>
          </tr>
          <tr>
            <td><Statistic text='keskiarvo' /></td>
            <td><Statistic value={mean()} /></td>
          </tr>
          <tr>
            <td><Statistic text='positiivisia' /></td>
            <td><Statistic value={positive()} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({ text, value }) => {
  return (
    <div>
      {text} {value}
    </div>
  )
}

const App = (props) => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header header={'anna palautetta'} />
      <Button
        handleClick={() => setGood(good + 1)}
        text='hyvä'
      />
      <Button
        handleClick={() => setNeutral(neutral + 1)}
        text='neutraali'
      />
      <Button
        handleClick={() => setBad(bad + 1)}
        text='huono'
      />

      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)