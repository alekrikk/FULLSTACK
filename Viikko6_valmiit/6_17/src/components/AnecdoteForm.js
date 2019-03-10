import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import { notificationNew, notificationRemove } from '../reducers/notificationReducer';
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.content.value
        const newAnecdote = await anecdoteService.createNew(content)
        props.createAnecdote(newAnecdote)
        props.notificationNew(content)
        setTimeout(() => {
            props.notificationRemove()
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

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
    }
}

const mapDispatchToProps = {
    createAnecdote,
    notificationNew,
    notificationRemove
}


const ConnectedAnecdotes = connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdotes