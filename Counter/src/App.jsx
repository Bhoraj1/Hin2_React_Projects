import {useState} from "react";
import './App.css'

function App() {
let [Counter, setCounter] = useState(0);

const AddValue = () =>{
  if(Counter < 20 ){
    setCounter((prevCounter) => {
    
      return prevCounter + 1;
    }); 

  }
}

const SubtractValue = () =>{
  if(Counter > 1){
  
    setCounter(prevCounter => prevCounter -1);
 
  }
  else if(Counter === 1){
    setCounter((prevCounter) => prevCounter -1);
  }
}

  return (
    <>
      <h1>Tea or React</h1>
      <h3>Counter Value:{Counter}</h3>
      <button onClick={AddValue}>Add Value</button>
      <br/><br/>
      <button onClick={SubtractValue}>Remove Value</button>
    </>
  )
}

export default App
