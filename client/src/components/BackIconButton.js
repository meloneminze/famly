import styled from '@emotion/styled';
import Back from '../assets/arrow_back_ios-24px.svg';

const BackIconButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  background-image: url(${Back});
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  color: ${(props) => props.theme.colors.textPrimary};
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
`;

export default BackIconButton;
