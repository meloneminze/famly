import styled from '@emotion/styled';
import Input from './Input.js';
import shoeIcon from '../assets/shoe-prints-solid.svg';

const ShoeIconInput = styled(Input)`
  placeholder: none;
  background-image: url(${shoeIcon});
  background-repeat: no-repeat;
  font-size: 1rem;
  background-position: 10%;
  background-size: 3rem;
  margin: 0.3rem;
  max-width: 40%;
  padding: 1.5rem;
  vertical-align: middle;
  text-align: right;
`;

export default ShoeIconInput;
