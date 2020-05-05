import React from 'react';
import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';

const NavContainer = styled.ul`
  display: flex;
  list-style-type: none;
  text-decoration: none;
  margin: 0;
  padding: 0;
  height: 60px;
  width: 100%;
  border-top: 3px solid #4d4d4d;
  position: fixed;
  bottom: 0;
`;

const NavItemLeft = styled.li`
  color: ${(props) => props.theme.colors.textPrimary};
  flex-grow: 1;
  text-decoration: none;
  background: ${(props) =>
    props.active
      ? '#FEA630; clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%)'
      : 'none'};
`;

const NavItemRight = styled.li`
  color: ${(props) => props.theme.colors.textPrimary};
  flex-grow: 1;
  text-decoration: none;
  background: ${(props) =>
    props.active
      ? '#FEA630; clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%)'
      : 'none'};
`;

const NavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const SVG = styled.svg`
  color: #4d4d4d;
`;

const NavBottom = () => {
  const location = useLocation();

  return (
    <NavContainer>
      <NavItemLeft active={location.pathname === '/children'}>
        <NavLink to="/">
          <SVG
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#4D4D4D"
            viewBox="0 0 24 24"
          >
            <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z" />
          </SVG>
        </NavLink>
      </NavItemLeft>
      <NavItemRight
        active={location.pathname === '/household' || '/displayHousehold'}
      >
        <NavLink to="/household">
          <SVG
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#4D4D4D"
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </SVG>
        </NavLink>
      </NavItemRight>
    </NavContainer>
  );
};
export default NavBottom;
