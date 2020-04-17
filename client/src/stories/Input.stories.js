import React from 'react';
import { action } from '@storybook/addon-actions';
import Input from '../components/Input';

export default {
  title: 'Input',
};

export const NameInput = () => (
  <Input
    placeholder="Name"
    type="text"
    onChange={action('Change')}
    required
  ></Input>
);

export const EMailInput = () => (
  <Input
    placeholder="E-Mail"
    type="email"
    onChange={action('Change')}
    required
  ></Input>
);

export const PasswordInput = () => (
  <Input
    placeholder="Passwort"
    type="password"
    onChange={action('Change')}
    required
  ></Input>
);

export const RepeatPasswordInput = () => (
  <Input
    placeholder="Passwort bestätigen"
    type="password"
    onChange={action('Change')}
    required
  ></Input>
);

export const ChangePasswordInput = () => (
  <Input
    placeholder="Passwort ändern"
    type="password"
    onChange={action('Change')}
    required
  ></Input>
);
