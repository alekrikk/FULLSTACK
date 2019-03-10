
import anecdoteService from '../services/anecdotes'


const reducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      const vote = action.data
      return state.map(anecdote => anecdote.id !== vote.id ? anecdote : vote)
    case 'CREATE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export const vote = (newVote) => {
  return async dispatch =>{ 
    const vote = await anecdoteService.update(newVote)
    dispatch({
      type: 'VOTE',
      data: vote
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'CREATE',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export default reducer