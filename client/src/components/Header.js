import React from 'react';
import styled from '@emotion/styled';

const MainHeader = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.colors.BackgroundPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderTitle = styled.h1`
  font-size: 3.75rem;
  color: ${(props) => props.theme.colors.textPrimary};
  text-align: center;
`;

function Header() {
  return (
    <MainHeader>
      <HeaderTitle>famly</HeaderTitle>
    </MainHeader>
  );
}

export default Header;
