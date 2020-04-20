import React from 'react';
import { action } from '@storybook/addon-actions';
import BirthdayIconInput from '../components/BirthdayIconInput';

export default {
  title: 'InputIcon',
};

export const BirthdayInput = () => (
  <BirthdayIconInput
    type="text"
    onChange={action('Change')}
  ></BirthdayIconInput>
);
