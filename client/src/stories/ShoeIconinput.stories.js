import React from 'react';
import { action } from '@storybook/addon-actions';
import ShoeIconInput from '../components/ShoeIconInput';

export default {
  title: 'InputIcon',
};

export const ShoeInput = () => (
  <ShoeIconInput type="text" onChange={action('Change')}></ShoeIconInput>
);
