import React from 'react';
import { Root, Container, CloseButton } from './styles';
import CloseSrc from '../../images/close.svg';

function Modal({ children }) {
  return (
    <Root>
      <Container>
        <CloseButton>
          <img src={CloseSrc} alt="" />
        </CloseButton>
        {children}
      </Container>
    </Root>
  )
}

export default Modal;
