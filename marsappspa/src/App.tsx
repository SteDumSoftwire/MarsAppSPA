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
import {Grid, Link as MUILink} from '@mui/material/'
import RoverPage from "./RoverPage";

function App() {
  return (
    <Router>
        <Box sx={{ flexGrow: 1}}>
          <AppBar position="static" color="primary">
            <Grid container justifyContent="space-evenly" alignItems="center">
              <Grid item xs={2}>
                <Button color="inherit">
                  <MUILink href="/" underline="none" color="white">Home</MUILink>
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button color="inherit">
                  <MUILink href="/counter" underline="none" color="white">Counter</MUILink>
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button color="inherit">
                  <MUILink href="/component" underline="none" color="white">My Component</MUILink>
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button color="inherit">
                  <MUILink href="/component/complex" underline="none" color="white">Complex Component</MUILink>
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button color="inherit">
                  <MUILink href="/rover" underline="none" color="white">Rovers</MUILink>
                </Button>
              </Grid>
            </Grid>
          </AppBar>
        </Box>
        <Routes>
          <Route path="" element={<HomePage />}/>
          <Route path="counter" element={<CounterPage />}/>
          <Route path="component" element={<ComponentPage />}>
            <Route path="complex" element={<ComplexTreePage />}/>
          </Route>
          <Route path="rover" element={<RoverPage />} /> 
        </Routes>
    </Router>
  );
}

export default App;

