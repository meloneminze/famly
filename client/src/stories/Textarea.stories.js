import React from 'react';
import { Textarea, TextareaContainer, Headline } from '../components/Textarea';

export default {
  title: 'Textarea',
  coponent: Textarea,
};

export const DataTextarea = () => {
  return (
    <TextareaContainer>
      <Headline
        placeholder="Lieblingsessen"
        type="text"
        maxlength="50"
      ></Headline>
      <Textarea placeholder="Nudeln" cols="50" rows="5"></Textarea>
    </TextareaContainer>
  );
};
