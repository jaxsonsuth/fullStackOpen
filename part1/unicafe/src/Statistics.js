import React from 'react'
import Display from './Display'

const Statistics = ({good, neutral, bad, total}) => {
    if (total === 0){
      return(
        <h3>No feedbak is given</h3>
      )
    }
    return (
      <table>
        <tbody>
            <Display name="good" value={good}/>
            <Display name="neutral" value={neutral}/>
            <Display name="bad" value={bad}/>
            <Display name="all" value={total}/>
            <Display name="average" value={(good - bad) / total}/>
            <Display name="positive" value={good / total * 100} perc='%'/>
        </tbody>
      </table>
    )
  }

export default Statistics