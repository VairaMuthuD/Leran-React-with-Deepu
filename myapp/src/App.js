import {useState} from 'react';
import './App.css';

function App() {

  const[count, setCount] = useState(0);

  function handleChange(){
    setCount(prev => prev + 1)
  }

  function handleChange1(){
    setCount(prev => prev > 0 ? prev - 1 : prev )
  }

  return (
    <div className="App">
      <div>
      <button onClick={handleChange}>
          Plus +
       </button>

       <button onClick={handleChange1}>
          Minus -
       </button>
      </div>
      
       <div>{count}</div>
    </div>
  );
}

export default App;
