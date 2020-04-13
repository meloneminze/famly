import React from 'react';
import Button from './components/Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Buttons',
};
export const loginButton = () => (
  <Button onClick={action('link to Login')}>Anmelden</Button>
);
