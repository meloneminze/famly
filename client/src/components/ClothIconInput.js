import styled from '@emotion/styled';
import Input from './Input.js';
import clothIcon from '../assets/tshirt-solid.svg';

export const ClothIconInput = styled(Input)`
  placeholder: none;
  background-image: url(${clothIcon});
  background-repeat: no-repeat;
  font-size: 1rem;
  background-position: 10%;
  background-size: 3rem;
  margin: 0.3rem;
  padding: 1.5rem;
  max-width: 40%;
  vertical-align: middle;
  text-align: right;
`;

export default ClothIconInput;
