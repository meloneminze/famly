import styled from '@emotion/styled';
import React from 'react';
import defaultPic from '../assets/user-regular.svg';

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0.2rem;
  background-color: #ffffff;
  justify-content: center;
  cursor: pointer;
  outline: none;
  border: none;
  box-shadow: 0rem 0.2rem 0.4rem;
`;

const PictureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Picture = styled.img`
  background-image: url(${defaultPic});
  background-color: ${(props) => props.theme.colors.light};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 10rem;
  text-align: center;
  max-width: 100%;
  height: 300px;
  margin: 1rem;
  flex-grow: 1;
  cursor: pointer;
  outline: none;
`;

const Label = styled.input`
margin: 1rem;
max-width: 100%;
color: ${(props) => props.theme.colors.textPrimary};
cursor: pointer;
outline: none;
text-align: center;
border: none;
border-bottom: dashed #707070;
flex-grow: 1;
font-size: 1.5rem;
::placeholder {
    color: ${(props) => props.theme.colors.textSecondary};
`;

function Polaroid() {
  return (
    <Frame>
      <PictureWrapper>
        <Picture />
        <Label placeholder="Name" />
      </PictureWrapper>
    </Frame>
  );
}

export default Polaroid;
