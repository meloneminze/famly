import styled from '@emotion/styled';
import React from 'react';
import defaultPic from '../assets/user-regular.svg';

const Frame = styled.div`
  display: flex;
  flex-flow: column wrap;
  background-color: #ffffff;
  margin-right: 5px;
  cursor: pointer;
  width: 168px;
  outline: none;
  border: none;
  box-shadow: 0px 3px 6px;
`;

const PictureWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  border: none;
  outline: none;
  margin: 10px;
  height: 190px;
`;

const Picture = styled.img`
  background-image: url(${defaultPic});
  background-color: ${(props) => props.theme.colors.light};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 80px;
  width: 150px;
  height: 150px;
  cursor: pointer;
  border: none;
  outline: none;
`;

const Label = styled.input`
margin-top: 13px;
width: 150px;
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
        <Label placeholder="Name" minLength="1" maxLength="20" />
      </PictureWrapper>
    </Frame>
  );
}

export default Polaroid;
