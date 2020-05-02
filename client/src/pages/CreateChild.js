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
  display: flex;
  flex-flow: column nowrap;
  margin: 0rem 0.6rem;
  justify-content: center;
  align-item: center;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0.6rem 0;
  justify-content: space-between;
`;

const IconInput = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-item: center;
  align-content: center;
`;

const Information = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin: 0.6rem 0;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  height: 2.2rem;
  justify-content: space-evenly;
  margin: 0.6rem 0;
`;

const Link = styled.a`
  display: flex;
  justify-content: flex-end;
  color: ${(props) => props.theme.colors.textThird};
  cursor: pointer;
  margin: 0.6rem 0;
`;

const CreateChild = () => {
  return (
    <>
      <AppHeader />
      <Main>
        <Container>
          <Polaroid />
          <IconInput>
            <BirthdayIconInput minLength={1} maxLength={10} />
            <ClothIconInput minLength={1} maxLength={6} />
            <ShoeIconInput minLength={1} maxLength={6} />
          </IconInput>
        </Container>
        <Information>
          <MemberInfoInput />
          <AddNewDataButton>+ Daten</AddNewDataButton>
        </Information>
        <ButtonArea>
          <Button>Speichern</Button>
          <Button>Verwerfen</Button>
        </ButtonArea>
        <Link>Kind löschen</Link>
      </Main>
    </>
  );
};

export default CreateChild;
