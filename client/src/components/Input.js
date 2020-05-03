import styled from '@emotion/styled';

const Input = styled.input`
  background-color: ${(props) => props.theme.colors.input};
  color: ${(props) => props.theme.colors.textPrimary};
  border-radius: 80px;
  border: none;
  text-align: left;
  box-shadow: 0px 3px 6px;

  outline: none;
  padding-left: 6px;
  ::placeholder {
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;
export default Input;
