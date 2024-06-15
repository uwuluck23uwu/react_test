import React, { useState } from 'react'

export default function App() {
  const [number, setNumber] = useState(0)
  const incremect = (n)=>{
    setNumber(number+n)
    console.log(number)
  }
  const decrement = (n)=>{
    setNumber(number-n)
    console.log(number)
  }

  return (
    <div>
      number : {number}
      <br/>
      <button onClick={()=>decrement(10)} className='btn btn-dark'>Sub</button>
      <button onClick={()=>incremect(10)} className='btn btn-dark'>Add</button>
      <button onClick={()=>setNumber(0)} className='btn btn-dark'>Reset</button>
    </div>
  )
}
