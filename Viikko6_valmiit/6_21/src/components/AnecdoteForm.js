import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import { notificationNew } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.content.value
        event.target.content.value = ''
        props.createAnecdote(content)
        props.notificationNew(content, 5)
    }
    return (
        <form onSubmit={addAnecdote}>
            <h2>create new</h2>
            <div><input name="content" /></div>
            <button type="submit">create</button>
        </form>
    )
}


export default connect(
    null,
    { createAnecdote, notificationNew }
  )(AnecdoteForm)