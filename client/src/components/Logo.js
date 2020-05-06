import React from 'react';
import styled from '@emotion/styled';
import LogoIcon from '../assets/Famly_Logo.png';

const Img = styled.img`
  width: 120px;
`;

function Logo(props) {
  return <Img src={LogoIcon} alt="Logo" {...props} />;
}

export default Logo;
