import React from 'react';
import styled from '@emotion/styled';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.BackgroundPrimary};
`;

const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.colors.textPrimary};
  text-align: center;
  padding: 5px;
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
