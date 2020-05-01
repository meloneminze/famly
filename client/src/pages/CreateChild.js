import React from 'react';
import styled from '@emotion/styled';
import AppHeader from '../components/AppHeader';
import Polaroid from '../components/Polaroid';
import BirthdayIconInput from '../components/BirthdayIconInput';
import ClothIconInput from '../components/ClothIconInput';
import ShoeIconInput from '../components/ShoeIconInput';
import MemberInfoInput from '../components/MemberInfoInput';
import Button from '../components/Button';
import AddNewDataButton from '../components/AddNewDataButton';

const Main = styled.div`
  flex-flow: row;
  overflow-: hidden;
  width: 100%;
  margin: 0 0.6rem;
`;

const IconInput = styled.div`
  flex-flow: column;
  flex-wrap: wrap;
  flex-grow: 1;
`;

const Information = styled.div`
  flex-flow: column;
  flex-wrap: wrap;
  margin: 0.6rem;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  margin: 0.6rem;
  justify-content: space-between;
`;

const CreateChild = () => {
  return (
    <>
      <AppHeader />
      <Main>
        <Polaroid />
        <IconInput>
          <BirthdayIconInput />
          <ClothIconInput />
          <ShoeIconInput />
        </IconInput>

        <Information>
          <MemberInfoInput />
          <MemberInfoInput />#
          <MemberInfoInput />
          <AddNewDataButton>+ Daten</AddNewDataButton>
        </Information>
        <ButtonArea>
          <Button>Speichern</Button>
          <Button>Verwerfen</Button>
        </ButtonArea>
      </Main>
    </>
  );
};

export default CreateChild;
