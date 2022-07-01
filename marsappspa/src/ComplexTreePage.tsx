import React, { createContext, useContext, useEffect, useState } from 'react';
import './App.scss';
import { Button } from '@mui/material'

const RootContext = createContext({
    count: 0,
    setCount: (val: number) => {}
  });

//
export function ComplexTreePage() {
    return (
      <div className="App">
        <header>
          <Component_1 />
        </header>
      </div>
    );
  }

function Component_1() {
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
    const value = {count, setCount};
  
    return (
      <div className='Component_1'>
      <RootContext.Provider value = {value}>
        <Component_2 />
        <Component_3 />
      </RootContext.Provider>
      </div>
    ) 
  }
  
  function Component_2() {
    const { count, setCount} = useContext(RootContext);
    return (
        <Button variant='outlined' disableElevation color='success' size='large' onClick={() => setCount(count + 1)}>
          Click Me!
        </Button>
    )
  }
  
  function Component_3() {
    return (
      <div>
        <p>Inside Component 3</p>
        <Component_4 />
      </div>
    )
  }
  
  function Component_4() {
    const {count} = useContext(RootContext);
    return (
      <div>
        <p>The button has been clicked {count} times</p> 
      </div>
    )
  }

  export default ComplexTreePage;
