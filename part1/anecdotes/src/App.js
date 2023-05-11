import { useState } from 'react'

function getRandomInt() {return Math.floor(Math.random() * 7);}

const Button = (props) =>(
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = (props) => <><p>{props.selected}</p><p>has {props.votes} votes</p></>

const MostVotes = ({anecdotes, votes}) => {
  console.log(votes)
  const indexOfMaxValue = votes.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
  return (<p>{anecdotes[indexOfMaxValue]}</p>)
}


const App = () => {
  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(getRandomInt())
  const [votes, setVotes] = useState(new Array(8).fill(0))
  const [voteUpdate, updateVote] = useState(0)

  const handleNextAnecdote = () => {
    const rand = getRandomInt()
    setSelected(rand)
    console.log(votes, selected, rand)
  }

  const handleVote = () => {
      const copy = votes
      copy[selected] += 1 
      setVotes(copy)
      updateVote(copy[selected])
      console.log(copy, selected)
      
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Display selected={anecdotes[selected]} votes={votes[selected]}/>
      <Button handleClick={() => (handleVote())} text="vote"/>
      <Button handleClick={() => (handleNextAnecdote())} text="next anecdote"/>
      <h2>Anecdote with the most votes</h2>
      <MostVotes anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App