import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import daylight from '../src/themes/daylight';

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={daylight}>{storyFn()}</ThemeProvider>
);

export default ThemeDecorator;
