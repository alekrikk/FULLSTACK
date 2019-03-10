
import React from 'react'
import { vote } from '../reducers/anecdoteReducer'

const AnecdoteList = ({store}) => {
    var sorted = store.getState().sort(function(a, b){
        return b.votes-a.votes
    })
  return(
   <ul>
      {store.getState().map(anecdote =>
      <div key={anecdote.id}>
          <div>
          {anecdote.content}
        </div>
        <div>
            has {anecdote.votes + " "}
            <button onClick={() => store.dispatch(vote(anecdote.id))}>vote</button>
          </div>
        </div>
      )}
    </ul>

  )
}


export default AnecdoteList