
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
  return {
    type: 'VOTE',
    data: newVote
  }
}

export const createAnecdote = (content) => {
  return {
    type: 'CREATE',
    data: {
      content: content.content,
      id: content.id,
      votes: 0
    }
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes,
  };
};

export default reducer