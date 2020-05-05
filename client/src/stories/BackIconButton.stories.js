import React from 'react';
import BackIconButton from '../components/BackIconButton';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Buttons',
};
export const GoBackButton = () => (
  <BackIconButton onClick={action('link to Page')} />
);
