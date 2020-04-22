import React, { useState } from 'react';
import NavBottom from '../components/NavBottom';
import Child from '../assets/face-24px.svg';
import Home from '../assets/home-24px.svg';

export default {
  title: 'Bottom Navigation',
  component: NavBottom,
};

export const Nav = () => {
  const [active, setActive] = useState('Children');

  return (
    <NavBottom
      links={[
        { label: 'Children', Icon: Child },
        { label: 'Household', Icon: Home },
      ]}
      value={active}
      onItemClick={(page) => setActive(page)}
    />
  );
};
