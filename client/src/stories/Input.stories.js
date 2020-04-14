import React from 'react';
import { action } from '@storybook/addon-actions';
import Input from '../components/Input';

export default {
  title: 'Input',
};

export const NameInput = () => (
  <Input placeholder="Name" onChange={action('Change')}></Input>
);

export const EMailInput = () => (
  <Input placeholder="E-Mail" onChange={action('Change')}></Input>
);

export const PasswordInput = () => (
  <Input placeholder="Passwort" onChange={action('Change')}></Input>
);

export const RepeatPasswordInput = () => (
  <Input placeholder="Passwort bestätigen" onChange={action('Change')}></Input>
);

export const ChangePasswordInput = () => (
  <Input placeholder="Passwort ändern" onChange={action('Change')}></Input>
);
