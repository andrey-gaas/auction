import React from 'react';
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
            <Button>Вход</Button>
            <Button>Регистрация</Button>
          </AuthContainer>
        </Grid>
      </Container>

      <Modal>
        <h1>MODAL</h1>
      </Modal>
    </Root>
  );
}

export default Header;
