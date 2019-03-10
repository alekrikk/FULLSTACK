
import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { notificationVote, notificationRemove } from '../reducers/notificationReducer';

const AnecdoteList = ({store}) => {
    store.getState().anecdotes.sort(function(a, b){
        return b.votes-a.votes
    })
    const voteAnecdote = (anecdote) => {
        store.dispatch(vote(anecdote.id))
        store.dispatch(notificationVote(anecdote.content))
        setTimeout(() => {
            store.dispatch(notificationRemove())
          }, 5000)
      }
    

  return(
   <ul>
      {store.getState().anecdotes.map(anecdote =>
      <div key={anecdote.id}>
          <div>
          {anecdote.content}
        </div>
        <div>
            has {anecdote.votes + " "}
            <button onClick={() => voteAnecdote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </ul>

  )
}

export default AnecdoteList