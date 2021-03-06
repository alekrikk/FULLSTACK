import React from 'react'


const Notification = (props) => {
  const status = props.store.getState().notification
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
     {props.store.getState().notification}
    </div>
  )
}




export default Notification
