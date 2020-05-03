import styled from '@emotion/styled';
import Input from './Input.js';
import clothIcon from '../assets/tshirt-solid.svg';

export const ClothIconInput = styled(Input)`
  placeholder: none;
  background-image: url(${clothIcon});
  background-repeat: no-repeat;
  font-size: 1rem;
  background-position: 10%;
  background-size: 48px;
  margin: 5px;
  padding: 24px;
  width: 97%;
  vertical-align: middle;
  text-align: right;
`;

export default ClothIconInput;
