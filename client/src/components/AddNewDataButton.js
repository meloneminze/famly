import styled from '@emotion/styled';

const AddNewDataButton = styled.button`
  background-color: ${(props) => props.theme.colors.input};
  color: ${(props) => props.theme.colors.textPrimary};
  text-align: center;
  border: dashed;
  border-color: ${(props) => props.theme.colors.light};
  border-radius: 80px;
  border-width: 3px;
  height: 48px;
  margin: 10px 0;
  box-shadow: 0 3px 6px rgba(172, 109, 26, 56);
  cursor: pointer;
  outline: none;
  font: bold 1.5rem 'Roboto', sans-serif;
`;

export default AddNewDataButton;
