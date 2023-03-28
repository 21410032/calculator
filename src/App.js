import Display from './components/Header/Display';
import Keyboard from './components/Header/Keyboard/Keyboard';
import './App.css';

import { useState } from 'react';
const useKeycodes=[
  46,48,49,50,51,52,53,54,55,56,57,96,97,98,99,200,101,102,103,104,105,8,13,190,187,189,191,56,106,107,109,111
];
const num=["0","1","2","3","4","5","6","7","8","9"];
const opr=["+","-","*","/"];
function App() {
  const [expression,setexpression]=useState("")
  const [result,setresult]=useState("")
  const [history,sethistory]=useState([])
  const handlekeypress=(keyCode,key)=>{
    if(!keyCode) return;
    if(!useKeycodes.includes(keyCode)) return;
    if(num.includes(key))
    {
      if(key==="0"){
        if(expression.length==="0")
        return
      }
      calculateresult(expression+key);
      setexpression(expression+key)
    }
    else if(opr.includes(key)){
      if(!expression) return;

      const lastchar=expression.slice(-1)
      if(opr.includes(lastchar)) return;

      if(lastchar===".")
      return;

      setexpression(expression+key);
    }
    else if(keyCode === 13)
    {
      if(!expression) return;
      calculateresult(expression);
      const temp=[...history]
      if(temp.length>20) temp=temp.splice(0,1);
      temp.push(expression);
      sethistory(temp)

    }
    else if(keyCode === 8)
    {
       if(!expression) return;
       calculateresult(expression.slice(0,-1))
       setexpression(expression.slice(0,-1))
    }
    else if(keyCode ===".")
    {
      if(!expression) return;

      const lastchar=expression.slice(-1)
      if(!num.includes(lastchar)) return;

      setexpression(expression+key)
    }
    else if(key==="=")
    {
      setexpression(expression)
    }
    else if(keyCode===46){
      setexpression(" ")
      setresult(" ")
    }
  };
  const calculateresult=(exp)=>{
    if(!exp) return;

    const lastchar=exp.slice(-1);
    if(!num.includes(lastchar)) exp=exp.slice(0,-1)
    const answer=eval(exp).toFixed(5)+ " "
    setresult(answer)
  }
  return (

    <div 
    className="App"
    tabIndex={0}
    onKeyDown={(event)=>handlekeypress(event.keyCode,event.key)}
    >
      <div className='App_calculator'>
        <Display expression={expression} result={result} history={history}/>
        <Keyboard handlekeypress={handlekeypress}/>
      </div>
    </div>
  );
}

export default App;
