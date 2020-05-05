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
import Household from './pages/DisplayHousehold';
import CreateChild from './pages/CreateChild';

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
            <div>Login</div>
          </Route>
          <Route exact path="/register">
            <div>Register</div>
          </Route>
          <Route exact path="/children">
            <Children />
          </Route>
          <Route exact path="/children/create">
            <CreateChild />
          </Route>
          <Route exact path="/children/:id">
            <div>Child</div>
          </Route>
          <Route path="/household">
            <Household />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
