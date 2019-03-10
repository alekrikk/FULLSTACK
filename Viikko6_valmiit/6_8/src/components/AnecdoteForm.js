import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {

    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.content.value
        props.store.dispatch(
          createAnecdote(content)
        )
        event.target.content.value = ''
      }
  return (
    <form onSubmit={addAnecdote}>
    <h2>create new</h2>
      <div><input name="content" /></div>
      <button type="submit">create</button>
    </form>
  )
}

export default AnecdoteForm