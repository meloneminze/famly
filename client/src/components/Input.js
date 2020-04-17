import styled from '@emotion/styled';

const Input = styled.input`
  background-color: ${(props) => props.theme.colors.input};
  color: ${(props) => props.theme.colors.textPrimary};
  border-radius: 5rem;
  border: none;
  text-align: left;
  box-shadow: 0rem 0.2rem 0.4rem rgba(172, 109, 26, 56);

  outline: none;
  padding-left: 0.4rem;
  ::placeholder {
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;
export default Input;
