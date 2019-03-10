
import React from 'react'
import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { notificationVote, notificationRemove } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteList = (props) => {
    props.anecdotes.sort(function (a, b) {
        return b.votes - a.votes
    })
    const voteAnecdote = async (anecdote) => {
        const newVote = await anecdoteService.update(anecdote)
        props.vote(newVote)
        props.notificationVote(anecdote.content)
        setTimeout(() => {
            props.notificationRemove()
        }, 5000)
    }

    return (
        <ul>
            {props.anecdotes.map(anecdote =>
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

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
    }
}

const mapDispatchToProps = {
    vote,
    notificationVote,
    notificationRemove
}


const ConnectedAnecdotes = connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteList)


export default ConnectedAnecdotes

