const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case 'NOTIFICATION_NEW':
            return "added new anecdote '" + action.notification + "'"
        case 'NOTIFICATION_VOTE':
            return "you voted '" + action.notification + "'"
        case 'NOTIFICATION_REMOVE':
            return null
        default:
            return state
    }
}

export const notificationNew = notification => {
    return {
        type: 'NOTIFICATION_NEW',
        notification,
    }
}

export const notificationVote = notification => {
    return {
        type: 'NOTIFICATION_VOTE',
        notification,
    }
}

export const notificationRemove = () => {
    return {
        type: 'NOTIFICATION_REMOVE',
    }
}

export default notificationReducer