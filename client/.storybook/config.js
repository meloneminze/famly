import { addDecorator, addParameters, configure } from '@storybook/react';
import GlobalStyles from '../src/components/GlobalStyles';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import themeDecorator from './themeDecorator';
import React from 'react';
import styled from '@emotion/styled';
const Main = styled.div`
  margin: 10px;
`;

const GlobalStylesDecorator = (storyFn) => (
  <Main>
    <GlobalStyles />
    {storyFn()}
  </Main>
);
addDecorator(GlobalStylesDecorator);
addDecorator(themeDecorator);
addParameters({
  viewport: { viewports: INITIAL_VIEWPORTS, defaultViewport: 'iphone6' },
});
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
