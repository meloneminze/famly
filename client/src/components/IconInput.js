import React from 'react';
import styled from '@emotion/styled';
// import Input from './Input.js';
import PropTypes from 'prop-types';
// import BirthdayCakeIcon from '../assets/BirthdayCake.svg';

// export const IconInput = styled(Input)`
//   placeholder: none;
//   background-img: url('./src/assets/BirthdayCake.svg');
//   background-repeat: no-repeat;
//   background-position: right;
// `;

// export default IconInput;

const IconInput = styled.input`
  background-color: ${(props) => props.theme.colors.input};
  color: ${(props) => props.theme.colors.textPrimary};
  border-radius: 5rem;
  border: none;
  //   text-align: left;

  cursor: pointer;
  outline: none;
  padding-left: 0.4rem;
`;

export const IconInputContainer = styled.div`
display: flex;
flex-direction: row;
justify-content center;
align-item: baseline;
border-radius: 5rem;
padding: 0.3rem 0.6rem;
margin: 0.6rem 1.25rem;
outline: none;
background-color: ${(props) => props.theme.colors.input};
color: ${(props) => props.theme.colors.textPrimary};
border: none;
box-shadow: 0rem 0.2rem 0.4rem rgba(172, 109, 26, 56);
flex: 1;
cursor: pointer;

`;

// const IconInput = styled.input`
//   border: none;
//   cursor: pointer;
//   margin-left: 10px;
//   font-size: 1rem;
//   flex: 1;
//   &:focus {
//     outline-color: #9eaebc;
// &:placeholder {
//         color: #9eaebc;
//   }
// `;

// export const IconInputContainer = styled.div`
//   display:flex;
//   flex-direction: row;
//   justify-content flex-start;
//   align-item: baseline;
//   border: 1.5px solid #707070;
//   border-radius: 5px;
//   padding: 5px 10px;
//   margin: 10px 20px;
//   outline: none;
// `;

const IconInputField = (props) => <IconInput {...props} />;

IconInputField.propTypes = {
  inputType: PropTypes.oneOf(['text', 'number']),
};

export default IconInputField;
