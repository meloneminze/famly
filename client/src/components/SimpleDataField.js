import React from 'react';
import styled from '@emotion/styled';

const TextareaContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.colors.input};
  border-radius: 1.25rem;
  border: none;
  padding: 0.6rem;
  outline: none;
`;

const Headline = styled.input`
background-color: ${(props) => props.theme.colors.input};
color: ${(props) => props.theme.colors.textSecondary}
font-weight: bold;
outline: none;
cursor: pointer;
max-width: 100%;
border: none;
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
  max-width: 100%;
  resize: none;
  wrap: "off";
  ::placeholder {
    color: ${(props) => props.theme.colors.textSecondary};
`;

const SimpleDataField = () => {
  return (
    <TextareaContainer>
      <Headline
        placeholder="Adresse der Schule"
        minLength={1}
        maxLength={50}
        size="65"
      ></Headline>
      <Textarea
        placeholder="Aquariumstraße 42"
        maxLength={250}
        rows={3}
        cols={60}
      ></Textarea>
    </TextareaContainer>
  );
};

export default SimpleDataField;
