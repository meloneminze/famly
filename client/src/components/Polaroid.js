import styled from '@emotion/styled';
import React from 'react';
import defaultPic from '../assets/user-regular.svg';

const Frame = styled.div`
  display: flex;
  flex-flow: column wrap;
  background-color: #ffffff;
  margin-right: 0.3rem;
  cursor: pointer;
  width: 10.5rem;
  outline: none;
  border: none;
  box-shadow: 0rem 0.2rem 0.4rem;
`;

const PictureWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  border: none;
  outline: none;
  margin: 0.6rem;
  height: 12rem;
`;

const Picture = styled.img`
  background-image: url(${defaultPic});
  background-color: ${(props) => props.theme.colors.light};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 5rem;
  width: 9.5rem;
  height: 9.5rem;
  cursor: pointer;
  border: none;
  outline: none;
`;

const Label = styled.input`
margin-top: 0.8rem;
width: 9.5rem;
color: ${(props) => props.theme.colors.textPrimary};
cursor: pointer;
outline: none;
text-align: center;
border: none;
border-bottom: dashed #707070;
font-size: 1rem;
::placeholder {
    color: ${(props) => props.theme.colors.textSecondary};
`;

function Polaroid() {
  return (
    <Frame>
      <PictureWrapper>
        <Picture />
        <Label placeholder="Name" minLength={1} maxLength={20} />
      </PictureWrapper>
    </Frame>
  );
}

export default Polaroid;
