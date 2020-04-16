import React from 'react';
import AddNewDataButton from '../components/AddNewDataButton';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Buttons',
};
export const NewChildButton = () => (
  <AddNewDataButton onClick={action('link to Page')}>+Kind</AddNewDataButton>
);
export const NewAdultButton = () => (
  <AddNewDataButton onClick={action('link to Page')}>
    +Elternteil
  </AddNewDataButton>
);
