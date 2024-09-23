import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    if(counter<20){
      setCounter(counter + 1);
    }
    else{
      alert("counter value can't exceed the value of 20")
    }
  };
  const decrement = () => {
    if(counter>0){
      setCounter(counter - 1);
    }
    else{
      alert("counter value can't below the negative")
    }
   
  };
  return (
    <>
      <h2>The Counter App</h2>
      <h1>The counter value is = {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;
