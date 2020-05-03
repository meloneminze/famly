import styled from '@emotion/styled';
import Input from './Input.js';
import shoeIcon from '../assets/shoe-prints-solid.svg';

const ShoeIconInput = styled(Input)`
  placeholder: none;
  background-image: url(${shoeIcon});
  background-repeat: no-repeat;
  font-size: 1rem;
  background-position: 10%;
  background-size: 48px;
  margin-top: 5px;
  margin-left: 5px;
  width: 97%;
  padding: 24px;
  text-align: right;
`;

export default ShoeIconInput;
