import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import { notificationNew, notificationRemove } from '../reducers/notificationReducer';

const AnecdoteForm = (props) => {

    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.content.value
        props.createAnecdote(content)
        props.notificationNew(content)
        event.target.content.value = ''
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