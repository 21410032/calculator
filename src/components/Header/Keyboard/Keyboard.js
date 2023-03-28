import React from 'react'
import './Keyboard.css'
function Keyboard(props) {
    const keys=[
      {
        KeyCode:46,
        label:"Clear"
      },
      {
        KeyCode:55,
        label: "7"
      },
      {
        KeyCode:56,
        label: "8"
      },
      {
        KeyCode:57,
        label: "9"
      },
      {
        KeyCode: 52,
        label: "4"
      },
      {
        KeyCode:53,
        label: "5"
      },
      {
        KeyCode:54,
        label: "6"
      },
      {
        KeyCode:  49,
        label: "1"
      },
      {
        KeyCode: 50,
        label:"2"
      },
      {
        KeyCode:51,
        label: "3"
      },
        {
          KeyCode:  48,
          label: "0"
        }
    
      ]; 
    
      const symbols=[
        {
          KeyCode: 8,
          value: "Clear",
          label:"⌧"
        },
        {
          KeyCode: 111,
          value: "/",
          label:"÷"
        },
        {
          KeyCode: 106,
          value: "*",
          label:"×"
        },
        {
          KeyCode:109,
          value:"-",
          label:"-"
        },
        {
          KeyCode: 107,
          value: "+",
          label:"+"
        }
      ];
  return (
    <div className='Keyboard'>

        <div className='keys'>
          <p></p>
            {
                keys.map((item,index)=>
                    <p onClick={()=>props.handlekeypress(item.KeyCode,item.label)} key={index}>{item.label}</p>
                )
            }
        </div>
        <div className='symbols'>
          {
            symbols.map((item,index)=>
                <p onClick={()=>props.handlekeypress(item.KeyCode,item.value)} key={index}>{item.label}</p>
            )
          }
        </div>
    </div>
  )
}
export default Keyboard