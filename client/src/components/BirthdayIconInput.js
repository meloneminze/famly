import styled from '@emotion/styled';
import Input from './Input.js';
import birthdayIcon from '../assets/birthday-cake-solid.svg';

export const BirthdayIconInput = styled(Input)`
  placeholder: none;
  background-image: url(${birthdayIcon});
  background-repeat: no-repeat;
  font-size: 1rem;
  background-position: 10%;
  background-size: 3rem;
  max-width: 40%;
  margin: 0.3rem;
  padding: 1.5rem;
  vertical-align: middle;
  text-align: right;
`;

export default BirthdayIconInput;
