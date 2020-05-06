import React from 'react';
import styled from '@emotion/styled';
import FullContainer from '../components/FullContainer';
import AppHeader from '../components/AppHeader';
import CreatePolaroid from '../components/CreatePolaroid';
import BirthdayIconInput from '../components/BirthdayIconInput';
import ClothIconInput from '../components/ClothIconInput';
import ShoeIconInput from '../components/ShoeIconInput';
import CreateMemberInfoInput from '../components/CreateMemberInfoInput';
import Button from '../components/Button';
import AddNewDataButton from '../components/AddNewDataButton';

const Main = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 0 5px;
  justify-content: center;
  align-item: center;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 5px 0;
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
  margin: 10px 0;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  height: 35px;
  justify-content: space-evenly;
  margin: 10px 0;
`;

const Link = styled.a`
  display: flex;
  justify-content: flex-end;
  color: ${(props) => props.theme.colors.textThird};
  cursor: pointer;
  margin: 10px 0;
`;

const CreateChild = () => {
  return (
    <>
      <FullContainer>
        <AppHeader />
        <Main>
          <Container>
            <CreatePolaroid />
            <IconInput>
              <BirthdayIconInput minLength={1} maxLength={10} />
              <ClothIconInput minLength={1} maxLength={6} />
              <ShoeIconInput minLength={1} maxLength={6} />
            </IconInput>
          </Container>
          <Information>
            <CreateMemberInfoInput />
            <AddNewDataButton>+ Daten</AddNewDataButton>
          </Information>
          <ButtonArea>
            <Button>Speichern</Button>
            <Button>Verwerfen</Button>
          </ButtonArea>
          <Link>Kind löschen</Link>
        </Main>
      </FullContainer>
    </>
  );
};

export default CreateChild;
