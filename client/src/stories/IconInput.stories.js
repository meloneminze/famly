import React from 'react';
import { action } from '@storybook/addon-actions';
import IconInput, { IconInputContainer } from '../components/IconInput';
import BirthdayCakeIcon from '../assets/BirthdayCake.svg';

export default {
  title: 'IconInput',
};

export const BirthdayInput = () => (
  <IconInputContainer>
    <img src={BirthdayCakeIcon} alt="Day of Birth" />
    <IconInput type="text" onChange={action('Change')}></IconInput>
  </IconInputContainer>
);
