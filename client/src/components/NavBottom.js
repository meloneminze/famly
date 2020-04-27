import React from 'react';
import styled from '@emotion/styled';
// import ActiveItem from '../assets/navbar_background.svg';
// import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const NavContainer = styled.ul`
  display: flex;
  // justify-content: center;
  // align-items: center;
  list-style: none;
  height: 60px;
  width: 100%;
  border-top: 0.2rem solid #4d4d4d;
`;

const NavItem = styled.li`
  flex-grow: 1;
  background: ${(props) => (props.active ? 'orange' : 'none')};
`;

const NavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

// clip-path: polygon(0 0, 51% 0, 100% 100%, 0% 100%);

const NavBottom = () => {
  const location = useLocation();

  return (
    <NavContainer>
      <NavItem active={location.pathname === '/'}>
        <NavLink to="/">Kind</NavLink>
      </NavItem>

      <NavItem active={location.pathname === '/household'}>
        <NavLink to="/household">Home</NavLink>
      </NavItem>
    </NavContainer>
  );
};
export default NavBottom;

// const NavBottom = ({ links, active, onItemClick }) => {
//   return (
//     <NavContainer>
//       {links.map((link) => {
//         <NavItem
//           key={link.label}
//           active={active === link.label}
//           onClick={() => onItemClick(link.label)}
//         >
//           <link.Icon active={active === link.label} />
//         </NavItem>;
//       })}
//     </NavContainer>
//   );
// };

// NavBottom.propTypes = {
//   links: PropTypes.array,
//   active: PropTypes.string,
//   onItemClick: PropTypes.func,
// };
// export default NavBottom;
