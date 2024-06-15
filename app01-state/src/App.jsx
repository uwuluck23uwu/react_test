import React, {useState} from 'react'
import AppKey from './AppKey'

export default function App() {
  const [show, setShow] = useState(true)

  return (
    <div>
      <button onClick={() => setShow(!show)} className='btn btn-dark m-2'>{show ? 'Hidden' : 'Show'}</button>
      {show && <AppKey/>}
    </div>
  )
}
