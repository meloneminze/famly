import styled from '@emotion/styled';

const AddNewDataButton = styled.button`
  background-color: ${(props) => props.theme.colors.input};
  color: ${(props) => props.theme.colors.textPrimary};
  text-align: center;
  border: dashed;
  border-color: ${(props) => props.theme.colors.light};
  border-radius: 5rem;
  border-width: 0.2rem;
  height: 3rem;
  margin: 0.6rem 0;
  box-shadow: 0rem 0.2rem 0.4rem rgba(172, 109, 26, 56);
  cursor: pointer;
  outline: none;
  font-size: x-large;
`;

export default AddNewDataButton;
