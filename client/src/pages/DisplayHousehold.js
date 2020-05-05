import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import NavBottom from '../components/NavBottom';
import Input from '../components/Input';
import AddNewDataButton from '../components/AddNewDataButton';
import FullContainer from '../components/FullContainer';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  align-content: center;
`;

const Title = styled.h2``;

function DisplayHousehold() {
  return (
    <>
      <FullContainer>
        <AppHeader />
        <Main>
          <Title>
            Mein Haushalt <Link to="/">Kinder</Link>
          </Title>
          <Input placeholder="Name" type="text" required />
          <Input placeholder="E-Mail" type="email" required />
          <AddNewDataButton>+ Kind</AddNewDataButton>
        </Main>
        <NavBottom />
      </FullContainer>
    </>
  );
}

export default DisplayHousehold;
