import React from 'react'

const Child = (props) => {
  const sendDataToParent =()=>{
    let data ="hello from child components"
    props.onChildData(data)
  }
  return (
    <div>
      <button onClick={sendDataToParent}>sendDataToParent</button>
    </div>
  )
}

export default Child
