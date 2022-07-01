import './App.scss';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';

//
function CounterPage() {
    return (
        <div className="App">
          <header>
            <Counter />
          </header>
        </div>
      );
}

function Counter() {
    const [count, setCount] = useState(() => {
      const saved = localStorage.getItem('count');
      const initalValue = saved == null ? 0 : JSON.parse(saved);
      return Number(initalValue);
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
        <Button variant='outlined' disableElevation color='success' size='large' onClick={() => setCount(count + 1)}>
          Click Me!
        </Button>
        <p>
          The button has been clicked {count} times
        </p>
      </div>
    )
}

export default CounterPage;
