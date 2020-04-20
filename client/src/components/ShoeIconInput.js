import styled from '@emotion/styled';
import Input from './Input.js';
import shoeIcon from '../assets/shoe-prints-solid.svg';

export const ShoeIconInput = styled(Input)`
  placeholder: none;
  background-image: url(${shoeIcon});
  background-repeat: no-repeat;
  font-size: 1.5rem;
  background-position: 10%;
  background-size: 3rem;
  margin-left: 1rem;
  padding: 2rem;
  vertical-align: middle;
  text-align: right;
`;

export default ShoeIconInput;
