import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container';
import Button from '../Button';
import Modal from '../Modal';
import {
  Root,
  Grid,
  LogoContainer,
  Logo,
  Nav,
  NavItem,
  AuthContainer,
} from './styles';
import LogoSrc from '../../images/logo.svg';

function Header() {
  const [isOpen, setOpen] = useState(false);
  const [type, setType] = useState(null);

  function signIn() {
    setOpen(true);
    setType('sign-in');
  }

  function signUp() {
    setOpen(true);
    setType('sign-up');
  }

  function close() {
    setOpen(false);
    setType(null);
  }

  return (
    <Root>
      <Container>
        <Grid>
          <LogoContainer>
            <Logo src={LogoSrc} alt="Prizemall" />
            <span>Prizemall</span>
          </LogoContainer>
          <Nav>
            <NavItem>
              <Link to="/">
                Главная
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/how-it-work">
                Как это работает?
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/reviews">
                Отзывы
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/support">
                Поддержка
              </Link>
            </NavItem>
          </Nav>

          <AuthContainer>
            <Button onClick={signIn}>Вход</Button>
            <Button onClick={signUp}>Регистрация</Button>
          </AuthContainer>
        </Grid>
      </Container>

      {
        isOpen &&
          <Modal close={close} type={type} setType={setType} />
      }
    </Root>
  );
}

export default Header;
