import styled from '@emotion/styled';
import Edit from '../assets/edit-24px.svg';

const EditIconButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  background-image: url(${Edit});
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  color: ${(props) => props.theme.colors.textPrimary};
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
`;

export default EditIconButton;
