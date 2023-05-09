import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
  const [childData , setChildData] = useState(" ")
  const handleChildData =(data)=>{
    setChildData(data)
  }
  return (
    <div>
      <p>child data : {childData}</p>
      <Child onChildData = {handleChildData}/>
    </div>
  )
}

export default Parent
