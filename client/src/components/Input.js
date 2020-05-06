import styled from '@emotion/styled';

const Input = styled.input`
  background-color: ${(props) => props.theme.colors.input};
  color: ${(props) => props.theme.colors.textPrimary};
  border-radius: 80px;
  border: none;
  text-align: left;
  box-shadow: 0px 3px 6px;
  margin: 10px 0;
  height: 40px;
  outline: none;
  padding-left: 20px;
  font-size: 1rem;
  ::placeholder {
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;
export default Input;
