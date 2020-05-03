import styled from '@emotion/styled';
import Input from './Input.js';
import birthdayIcon from '../assets/birthday-cake-solid.svg';

export const BirthdayIconInput = styled(Input)`
  placeholder: none;
  background-image: url(${birthdayIcon});
  background-repeat: no-repeat;
  font-size: 1rem;
  background-position: 15%;
  background-size: 44px;
  width: 97%;
  margin: 5px;
  padding: 24px;
  vertical-align: middle;
  text-align: right;
`;

export default BirthdayIconInput;
