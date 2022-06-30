import React, { createContext, useContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface MyComponentProps {
  imgSrc: string;
}

const RootContext = createContext({
  count: 0,
  setCount: (val: number) => {}
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <MyComponent imgSrc="https://www.nasa.gov/sites/default/files/thumbnails/image/capstone_liftoff.jpg"/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Component_1 />
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


class MyComponent extends React.Component<MyComponentProps, any> {
  constructor(props: MyComponentProps) {
    super(props);
    this.state = {

    }
  }
  
  render() {
    return (
      <div className='Component'>
        <h1>Title</h1>
        <p>Paragraf 1</p>
        <p>Pargraf 2</p>
        <img className='Component-image' src={this.props.imgSrc}></img>
      </div>
    );
  }
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
      <button className='Counter-Button' onClick={() => setCount(count + 1)}>
        Click Me!
      </button>
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

export default App;
