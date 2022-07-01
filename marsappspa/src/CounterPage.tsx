import './App.css';
import { useEffect, useState } from 'react';

//
function CounterPage() {
    return (
        <div className="App">
          <header className="App-header">
            <Counter />
          </header>
        </div>
      );
}

function Counter() {
    const [count, setCount] = useState(() => {
      const saved = localStorage.getItem('count');
      if (saved == null)
        return 0;
      const inititalValue = JSON.parse(saved!);
      return Number(inititalValue);
    });
  
  
    useEffect(
      () => {
        return function cleanup() {
          localStorage.setItem("count", JSON.stringify(count));
        }
      }
    )
  
    return(
      <div className='Counter'>
        <button className='Counter-Button' onClick={() => setCount(count + 1)}>
          Click Me!
        </button>
        <p>
          The button has been clicked {count} times
        </p>
      </div>
    )
}

export default CounterPage;
