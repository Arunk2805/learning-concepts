import React from 'react'
import ChildComp from './ChildComp'

const ParentComp = () => {

  const data  = "hello world"
  return (
    <div>
      <h2></h2>
      <ChildComp ParentData = {data} />
    </div>
  )
}

export default ParentComp
