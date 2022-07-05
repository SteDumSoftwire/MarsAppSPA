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
import {Drawer, Grid, IconButton, Link as MUILink, List, ListItem, ListItemText, useMediaQuery, useTheme} from '@mui/material/'
import RoverPage from "./RoverPage";
import { useState } from "react";
import 'material-icons/iconfont/material-icons.css';


function App() {
  const theme = useTheme();
  const renderBurger = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Router>
        <Box sx={{ flexGrow: 1}}>
          {
            renderBurger? <DrawerComponent /> : <NavBar />
          }
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

function NavBar() {
  return(
    <div>
      <AppBar position="static" color="primary">
        <Grid container justifyContent="space-evenly" alignItems="center" textAlign="center">
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
    </div>
  )
}

function DrawerComponent() {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
      <div style={{backgroundColor: "#1976d2"}}>
        <Drawer
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
        >
        <Grid container justifyContent="space-evenly" alignItems="stretch" textAlign="center" direction="column" sx={{height: '50%'}}>
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
        </Drawer>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
          <span className="material-icons">menu</span>
        </IconButton>
      </div>
    );
  }

export default App;

