import React from 'react';
import styled from '@emotion/styled';
import Polaroid from '../components/Polaroid';
import BirthdayIconInput from '../components/BirthdayIconInput';
import ClothIconInput from '../components/ClothIconInput';
import ShoeIconInput from '../components/ShoeIconInput';
import NavBottom from '../components/NavBottom';
import MemberInfoInput from '../components/MemberInfoInput';

const IconHeader = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  width: 100%;
  margin: 0.6rem;
  margin-top: 2rem;
  justify-content: space-between;
`;

const Main = styled.div`
  flex-flow: row;
  width: 100%;
  padding: 0.6rem;
`;

const IconInput = styled.div`
  flex-flow: column;
  flex-wrap: wrap;
  flex-grow: 1;
`;

const Information = styled.div`
  flex-flow: column;
  flex-wrap: wrap;
`;

const CreateChild = () => {
  return (
    <>
      <IconHeader>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="#4D4D4D"
          viewBox="0 0 50 50"
        >
          <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="#4D4D4D"
          viewBox="0 0 50 50"
        >
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
        </svg>
      </IconHeader>
      <Main>
        <Polaroid />
        <IconInput>
          <BirthdayIconInput />
          <ClothIconInput />
          <ShoeIconInput />
        </IconInput>
      </Main>
      <Information>
        <MemberInfoInput />
      </Information>
      <NavBottom />
    </>
  );
};

export default CreateChild;
