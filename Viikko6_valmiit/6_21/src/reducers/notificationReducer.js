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

export const notificationNew = (notification, seconds) => {
    return async dispatch => {
        dispatch({
            type: 'NOTIFICATION_NEW',
            notification,
        })
        await setTimeout(() => {
            dispatch({
                type: 'NOTIFICATION_REMOVE',
            })
        }, seconds * 1000)
    }

}

export const notificationVote = (notification, seconds) => {
    return async dispatch => {
        dispatch({
            type: 'NOTIFICATION_VOTE',
            notification,
        })
        await setTimeout(() => {
            dispatch({
                type: 'NOTIFICATION_REMOVE',
            })
        }, seconds * 1000)
    }

}
export default notificationReducer