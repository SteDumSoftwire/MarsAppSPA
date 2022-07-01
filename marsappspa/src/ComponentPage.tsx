import './App.scss';

interface MyComponentProps {
    imgSrc: string;
    children: Array<JSX.Element>;
}
//
function ComponentPage() {
    return (
      <div className="App">
        <header>
            <MyComponent imgSrc="https://www.nasa.gov/sites/default/files/thumbnails/image/capstone_liftoff.jpg">
              <p>Paragraf 1</p>
              <p>Pargraf 2</p>
            </MyComponent>
        </header>
      </div>
    );
  }

function MyComponent(props: MyComponentProps) {
    return (
      <div className='Component'>
        <h1>Title</h1>
        {props.children}
        <img src={props.imgSrc}></img>
      </div>
    );
}

export default ComponentPage;
