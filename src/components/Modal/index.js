import React from 'react';
import PropTypes from 'prop-types';
import { Root, Container, CloseButton } from './styles';
import CloseSrc from '../../images/close.svg';
import SignIn from './SignIn';
import SignUp from './SignUp';

function Modal({ close, type, setType }) {
  return (
    <Root>
      <Container>
        <CloseButton onClick={close}>
          <img src={CloseSrc} alt="" />
        </CloseButton>
        {
          type === 'sign-in' &&
          <SignIn setType={setType} />
        }

        {
          type === 'sign-up' &&
          <SignUp setType={setType} />
        }
      </Container>
    </Root>
  )
}

Modal.propTypes = {
  close:   PropTypes.func.isRequired,
  setType: PropTypes.func.isRequired,
  type:    PropTypes.string,
};

export default Modal;
