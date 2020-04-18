import React from 'react';
import { action } from '@storybook/addon-actions';
import ClothIconInput from '../components/ClothIconInput';

export default {
  title: 'InputIcon',
};

export const ClothInput = () => (
  <ClothIconInput type="text" onChange={action('Change')}></ClothIconInput>
);
