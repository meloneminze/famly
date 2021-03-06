import React from 'react';
import Button from '../components/Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Buttons',
};
export const loginButton = () => (
  <Button onClick={action('link to Login')}>Anmelden</Button>
);
export const signinButton = () => (
  <Button onClick={action('link to SignIn')}>Registrieren</Button>
);
export const saveButton = () => (
  <Button onClick={action('link to Profile')}>Speichern</Button>
);
export const removeButton = () => (
  <Button onClick={action('link to Profile')}>Verwerfen</Button>
);
