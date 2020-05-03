import styled from '@emotion/styled';

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.buttonPrimary};
  color: ${(props) => props.theme.colors.textPrimary};
  text-align: center;
  border: solid;
  border-color: ${(props) => props.theme.colors.light};
  border-radius: 16px;
  border-width: 3px;
  box-shadow: 0px 3px 6px rgba(172, 109, 26, 56);
  cursor: pointer;
  outline: none;
  font: bold 1.5rem 'Roboto', sans-serif;
`;

export default Button;
