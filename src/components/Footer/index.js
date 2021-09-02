import React from 'react';
import Container from '../Container';
import {
  Root,
  Grid,
  LogoContainer,
  Logo,
} from './styles';
import LogoSrc from '../../images/logo.svg';

function Footer() {
  return (
    <Root>
      <Container>
        <Grid>
          <LogoContainer>
            <Logo src={LogoSrc} alt="" />
            PRIZEMALL
          </LogoContainer>
        </Grid>
      </Container>
    </Root>
  );
}

export default Footer;
