import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from '../src/components/GlobalStyles';
import daylight from '../src/themes/daylight';

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={daylight}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
);

export default ThemeDecorator;
