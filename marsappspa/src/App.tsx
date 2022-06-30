import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <MyComponent />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

class MyComponent extends React.Component {
  constructor(props: any) {
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
        <img className='Component-image' src="https://www.nasa.gov/sites/default/files/thumbnails/image/capstone_liftoff.jpg"></img>
      </div>
    );
  }
}

export default App;
