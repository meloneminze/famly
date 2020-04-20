import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import daylight from './themes/daylight';
import Children from './pages/Children';
import Household from './pages/Household';
import AppHeader from './components/AppHeader';

const Main = styled.main`
  display: flex;
`;

function App() {
  return (
    <ThemeProvider theme={daylight}>
      <Router>
        <GlobalStyles />
        <AppHeader />
        <Main>
          <Switch>
            <Route path="/household">
              <Household />
            </Route>
            <Route path="/">
              <Children />
            </Route>
          </Switch>
        </Main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
