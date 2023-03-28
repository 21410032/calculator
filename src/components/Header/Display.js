import React from 'react'
import './Display.css'

function Display(props) {
  
  return (
    <div className='Display custom-scroll'>
      <div className='history '>
       {
       props.history && props.history?.map((item,index)=>
       <p key={item + " " + Math.random()*35}>{item}</p>
       )
       }
      </div>
      <div className='expressions custom-scroll '>
        <p>{props.expression}</p>
      </div>
      <div className='result'>
        <p>{props.result}</p>
      </div>
    </div>
  )
}

export default Display