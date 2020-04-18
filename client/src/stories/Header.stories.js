import React from 'react';
import Header from '../components/Header';
import { action } from '@storybook/addon-actions';

export default {
  component: Header,
  title: 'Header',
};

export const TitleHeader = () => <Header onClick={action('link to home')} />;
