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
      <Statistic text="hyvä" value={props.good} />
      <Statistic text="neutraali" value={props.neutral} />
      <Statistic text="huono" value={props.bad} />
      <Statistic text="summa" value={sum()} />
      <Statistic text="keskiarvo" value={mean()} />
      <Statistic text="positiivisia" value={positive()} />
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
    <p>
      {text} {value}
    </p>
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