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
        maxlength="65"
        size="65"
      ></Headline>
      <Textarea
        placeholder="Nudeln"
        cols="65"
        min-rows="1"
        max-rows="5"
      ></Textarea>
    </TextareaContainer>
  );
};
