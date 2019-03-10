import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const status = props.notification
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (!status) {
    return null
  }
  return (
    <div style={style}>
      {props.notification}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  }
}

const ConnectedAnecdotes = connect(
  mapStateToProps)(Notification)


export default ConnectedAnecdotes
