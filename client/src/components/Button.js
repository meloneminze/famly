import styled from '@emotion/styled';

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.buttonPrimary};
  color: ${(props) => props.theme.colors.textPrimary};
  text-align: center;
  border: ${(props) => props.theme.colors.light};
  border-radius: 20px;
  border-width: medium;
  box-shadow: 0px 3px 6px rgba(172, 109, 26, 56);
  font-size: 14px;
`;

export default Button;
