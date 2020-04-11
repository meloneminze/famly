import React from 'react';
import GlobalStyles from './components/GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import daylight from './themes/daylight';

function App() {
  return (
    <ThemeProvider theme={daylight}>
      <GlobalStyles />
      <div>Hello World</div>
    </ThemeProvider>
  );
}

export default App;
