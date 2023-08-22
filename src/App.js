
import { getQueriesForElement } from '@testing-library/react';
import './App.css';
import { useState } from 'react';

function App() {
 const [num,setNum] = useState(0)
  let ing = ()=>{
    setNum(num+1)
  
  }

  let dec= ()=>{
    setNum(num-1)
  }
let szero = () =>{
  setNum(0)
}
  return (
    <>
    <div className="App">
     <h1>{num}</h1>
     <button onClick={ing}>Increase</button>&nbsp;&nbsp;
     <button onClick={dec}>Decrease</button>&nbsp;&nbsp;
     <button onClick={szero}>Reset to Zero</button>&nbsp;&nbsp;
    </div>
    </>
  );
}


export default App;
