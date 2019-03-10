import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notificationNew, notificationRemove } from '../reducers/notificationReducer';

const AnecdoteForm = (props) => {

    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.content.value
        props.store.dispatch(
          createAnecdote(content)
        )
        props.store.dispatch(notificationNew(content))
        event.target.content.value = ''
        setTimeout(() => {
            props.store.dispatch(notificationRemove())
          }, 5000)
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