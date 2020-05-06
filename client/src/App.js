import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import daylight from './themes/daylight';
import Children from './pages/Children';
import DisplayHousehold from './pages/DisplayHousehold';
import CreateChild from './pages/CreateChild';
import DisplayChild from './pages/DisplayChild';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <ThemeProvider theme={daylight}>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route exact path="/">
            <Redirect to="/children" />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/children">
            <Children />
          </Route>
          <Route exact path="/children/create">
            <CreateChild />
          </Route>
          <Route exact path="/children/:id">
            <DisplayChild />
          </Route>
          <Route path="/household">
            <DisplayHousehold />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
