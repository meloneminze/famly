import styled from '@emotion/styled';

export const TextareaContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.colors.input};
  border-radius: 1.25rem;
  border: none;
  padding: 0.6rem;
  outline: none;
`;

export const Headline = styled.input`
background-color: ${(props) => props.theme.colors.input};
color: ${(props) => props.theme.colors.textSecondary}
font-weight: bold;
outline: none;
cursor: pointer;
border: none;
border-bottom: dotted #707070;
::placeholder {
    color: ${(props) => props.theme.colors.textSecondary};
`;

export const Textarea = styled.textarea`
background-color: ${(props) => props.theme.colors.input};
  color: ${(props) => props.theme.colors.textPrimary};
  border: none;
  outline: none;
  cursor: pointer;
  resize: none;
  ::placeholder {
    color: ${(props) => props.theme.colors.textSecondary};
`;
