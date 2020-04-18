import React from 'react';
import AppHeader from '../components/AppHeader';
import { action } from '@storybook/addon-actions';

export default {
  component: AppHeader,
  title: 'AppHeader',
};

export const TitleHeader = () => <AppHeader onClick={action('link to home')} />;
