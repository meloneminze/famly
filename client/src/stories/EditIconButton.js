import React from 'react';
import EditIconButton from '../components/EditIconButton';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Buttons',
};
export const EditButton = () => (
  <EditIconButton onClick={action('link to Page')} />
);
