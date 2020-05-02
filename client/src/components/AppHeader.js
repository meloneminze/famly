import React from 'react';
import styled from '@emotion/styled';

const Header = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.colors.BackgroundPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.colors.textPrimary};
  text-align: center;
  padding: 0.3rem;
  cursor: pointer;
  outline: none;
`;

function AppHeader() {
  return (
    <Header>
      <HeaderTitle>famly</HeaderTitle>
    </Header>
  );
}

export default AppHeader;
