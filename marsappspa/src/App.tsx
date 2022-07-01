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
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import {Link as MUILink} from '@mui/material/'

function App() {
  return (
    <Router>
        <Box sx={{ flexGrow: 1}}>
          <AppBar position="static" color="primary">
            <Toolbar sx={{ display: "flex"}}>
              <Button color="inherit" sx={{flexGrow: 1}}>
                <MUILink href="/" underline="none" color="white">Home</MUILink>
              </Button>
              <Button color="inherit" sx={{flexGrow: 1}}>
                <MUILink href="/counter" underline="none" color="white">Counter</MUILink>
              </Button>
              <Button color="inherit" sx={{flexGrow: 1}}>
                <MUILink href="/component" underline="none" color="white">My Component</MUILink>
              </Button>
              <Button color="inherit" sx={{flexGrow: 1}}>
                <MUILink href="/component/complex" underline="none" color="white">Complex Component</MUILink>
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Routes>
          <Route path="" element={<HomePage />}/>
          <Route path="counter" element={<CounterPage />}/>
          <Route path="component" element={<ComponentPage />}>
            <Route path="complex" element={<ComplexTreePage />}/>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;

