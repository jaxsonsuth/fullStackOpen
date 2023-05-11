import { useState } from 'react'
import Statistics from './Statistics'
import Button from './Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGood = () => {
      const update = good + 1
      setGood(update)
      setTotal(update + neutral + bad)
  }
  const handleNeutral = () => {
    const update = neutral + 1
    setNeutral(update)
    setTotal(good + update + bad)
  }
  const handleBad = () => {
    const update = bad + 1
    setBad(update)
    setTotal(good + neutral + update)
  }



  return (
    <div>
      
      <h1>give feedback</h1>
      <Button handleClick={() => handleGood()} text="good" />
      <Button handleClick={() => handleNeutral()} text="neutral" />
      <Button handleClick={() => handleBad()} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>


    </div>
  )
}

export default App