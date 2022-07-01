import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import ComplexTreePage from "./ComplexTreePage";
import ComponentPage from "./ComponentPage";
import CounterPage from "./CounterPage";
import HomePage from "./HomePage";

//
function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/counter">Counter Page</Link>
          </li>
          <li>
            <Link to="/component">Component Page</Link>
          </li>
          <li>
            <Link to="/complex">Complex Tree Page</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/counter" element={<CounterPage />}/>
          <Route path="/component" element={<ComponentPage />}/>
          <Route path="/complex" element={<ComplexTreePage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

