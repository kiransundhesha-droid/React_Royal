import React, { useState } from 'react'

const UseState = () => {


    const [count,setCount] =useState(0);

    const increseCount=()=>{
        setCount(count+1)
    }

    const decreseCount=()=>{
        setCount(count-1)
    }

  return (
    <div style={{textAlign:"center", margin:20 }}>
    <span style={{border:"2px solid black", padding:10}}> {count<0 ?setCount(0) : count}</span>

    <br>
    </br>
    <br />    
    <button onClick={increseCount} className='btn btn-primary' >
        IncreseCount
    </button>

    <button onClick={decreseCount} className='btn btn-warning'>
        DecreseCount
    </button>


    </div>
  )
}

export default UseState