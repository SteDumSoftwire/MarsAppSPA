import './App.css';

interface MyComponentProps {
    imgSrc: string;
}
//
export function ComponentPage() {
    return (
      <div className="App">
        <header className="App-header">
            <MyComponent imgSrc="https://www.nasa.gov/sites/default/files/thumbnails/image/capstone_liftoff.jpg"/>
        </header>
      </div>
    );
  }

export function MyComponent(props: MyComponentProps) {
    return (
      <div className='Component'>
        <h1>Title</h1>
        <p>Paragraf 1</p>
        <p>Pargraf 2</p>
        <img className='Component-image' src={props.imgSrc}></img>
      </div>
    );
}

export default ComponentPage;
