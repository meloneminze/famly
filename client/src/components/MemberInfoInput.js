import React from 'react';
import styled from '@emotion/styled';

const TextareaContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  background-color: ${(props) => props.theme.colors.input};
  border-radius: 20px;
  border: none;
  padding: 16px;
  outline: none;
  box-shadow: 0px 3px 6px;
`;

const Headline = styled.input`
background-color: ${(props) => props.theme.colors.input};
color: ${(props) => props.theme.colors.textSecondary}
font-weight: bold;
outline: none;
cursor: pointer;
border: none;
width: 100%;
border-bottom: dotted #707070;
::placeholder {
    color: ${(props) => props.theme.colors.textSecondary};
`;

const Textarea = styled.textarea`
background-color: ${(props) => props.theme.colors.input};
  color: ${(props) => props.theme.colors.textPrimary};
  border: none;
  outline: none;
  cursor: pointer;
  resize: none;
  ::placeholder {
    color: ${(props) => props.theme.colors.textSecondary};
`;

const MemberInfoInput = () => {
  return (
    <TextareaContainer>
      <Headline
        placeholder="Adresse der Schule"
        minLength="1"
        maxLength="50"
      ></Headline>
      <Textarea
        placeholder="Aquariumstraße 42"
        maxLength="200"
        rows="3"
        cols="45"
      ></Textarea>
    </TextareaContainer>
  );
};

export default MemberInfoInput;
