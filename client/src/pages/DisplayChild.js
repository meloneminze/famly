import React from 'react';
import styled from '@emotion/styled';
import BackIconButton from '../components/BackIconButton';
import DisplayPolaroid from '../components/DisplayPolaroid';
import BirthdayIconInput from '../components/BirthdayIconInput';
import ClothIconInput from '../components/ClothIconInput';
import ShoeIconInput from '../components/ShoeIconInput';
import DisplayMemberInfoInput from '../components/DisplayMemberInfoInput';
import NavBottom from '../components/NavBottom';
import EditIconButton from '../components/EditIconButton';

const IconHeader = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

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

const DisplayChild = () => {
  return (
    <>
      <IconHeader>
        <BackIconButton />
        <EditIconButton />
      </IconHeader>
      <Main>
        <Container>
          <DisplayPolaroid />
          <IconInput>
            <BirthdayIconInput minLength={1} maxLength={10} />
            <ClothIconInput minLength={1} maxLength={6} />
            <ShoeIconInput minLength={1} maxLength={6} />
          </IconInput>
        </Container>
        <Information>
          <DisplayMemberInfoInput />
        </Information>
      </Main>
      <NavBottom />
    </>
  );
};

export default DisplayChild;
