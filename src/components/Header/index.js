import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container';
import Button from '../Button';
import Modal from '../Modal';
import Menu from '../Menu';
import {
  Root,
  Grid,
  LogoContainer,
  Logo,
  Nav,
  NavItem,
  AuthContainer,
  MenuButton,
} from './styles';
import LogoSrc from '../../images/logo.svg';
import MenuSrc from '../../images/menu.svg';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [type, setType] = useState(null);

  function signIn() {
    setModalOpen(true);
    setType('sign-in');
  }

  function signUp() {
    setModalOpen(true);
    setType('sign-up');
  }

  function close() {
    setModalOpen(false);
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

          <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
            <img src={MenuSrc} alt="" />
          </MenuButton>
        </Grid>
      </Container>

      {
        modalOpen &&
          <Modal close={close} type={type} setType={setType} />
      }
      <Menu
        isOpen={menuOpen}
        close={() => setMenuOpen(false)}
        signIn={signIn}
        signUp={signUp}
      />
    </Root>
  );
}

export default Header;
