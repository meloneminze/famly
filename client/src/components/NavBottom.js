import React from 'react';
import styled from '@emotion/styled';
// import PropTypes from 'prop-types';

const NavContainer = styled.ul`
display: flex;
// justify-content: center;
// align-items: center;
align-content: space-between;
list-style: none;
height: 10%;
width= 100%;
border-top: 0.2rem solid #4d4d4d;
`;

const NavItem = styled.li`
  display: flex;
  flex: 1;
  align-content: space-between;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  cursor: pointer;
`;

const NavBottom = () => {
  return (
    <NavContainer>
      <NavItem>Kind</NavItem>
      <NavItem>Home</NavItem>
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
