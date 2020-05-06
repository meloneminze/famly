import React from 'react';
import styled from '@emotion/styled';
import Input from '../components/Input';
import Button from '../components/Button';
import FullContainer from '../components/FullContainer';
import Logo from '../components/Logo';

const Main = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 300px;
`;

const LogoArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const ButtonArea = styled.div`
  display: flex;
  margin: 10px 0;
  justify-content: center;
`;

const Link = styled.a`
  display: flex;
  justify-content: flex-end;
  color: ${(props) => props.theme.colors.textThird};
  cursor: pointer;
  margin: 10px 0;
`;

function Login() {
  return (
    <>
      <FullContainer>
        <Main>
          <LogoArea>
            <Logo />
          </LogoArea>
          <Input placeholder="Name" type="text" required />
          <Input placeholder="E-Mail" type="email" required />
          <Input placeholder="Passwort" type="password" required />
          <Input placeholder="Wiederholung Passwort" type="password" required />
          <ButtonArea>
            <Button>Registrieren</Button>
          </ButtonArea>
          <Link>Zurück zur Anmeldung</Link>
        </Main>
      </FullContainer>
    </>
  );
}

export default Login;
