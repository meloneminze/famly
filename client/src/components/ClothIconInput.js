import styled from '@emotion/styled';
import Input from './Input.js';
import clothIcon from '../assets/tshirt-solid.svg';

export const ClothIconInput = styled(Input)`
  placeholder: none;
  background-image: url(${clothIcon});
  background-repeat: no-repeat;
  font-size: 1.5rem;
  background-position: 10%;
  background-size: 3rem;
  margin-left: 1rem;
  padding: 2rem;
  vertical-align: middle;
  text-align: right;
`;

export default ClothIconInput;
