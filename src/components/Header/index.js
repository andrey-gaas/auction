import React from 'react';
import Container from '../Container';
import { Root, Grid, LogoContainer, Logo } from './styles';
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
        </Grid>
      </Container>
    </Root>
  );
}

export default Header;
