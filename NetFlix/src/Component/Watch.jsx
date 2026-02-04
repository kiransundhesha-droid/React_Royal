import React from 'react'
import { useParams } from 'react-router-dom'

const Watch = () => {
    const name = useParams().Name
  return (
    <>
    
    <h1>WATCHINH...{name}</h1>
    </>
  )
}

export default Watch