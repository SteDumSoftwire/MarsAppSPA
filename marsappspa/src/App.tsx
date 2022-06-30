import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface MyComponentProps {
  imgSrc: string;
}

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
        <Counter/>
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

export default App;
