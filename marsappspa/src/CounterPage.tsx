import './App.scss';
import { FormEventHandler, useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Input } from '@mui/material'

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

    const [increment, setIncrement] = useState(1);


    useEffect(
      () => {
          console.log(count);
          localStorage.setItem("count", JSON.stringify(count));
      }, [count]
    )
  
    return(
      <div className='Counter'>
        <TextField variant='filled' placeholder='Set Increment' color='success' name="inc" onChange={e => setIncrement(Number(e.target.value))} inputProps={{color: "white"}}/>
        <br></br>
        <Button variant='outlined' disableElevation color='success' size='large' onClick={() => setCount(count + increment)}>
          Click Me!
        </Button>
        <p>
          The button has been clicked {count} times
        </p>
      </div>
    )
}

export default CounterPage;
