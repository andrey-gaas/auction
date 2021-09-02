import React from 'react';
import PropTypes from 'prop-types';
import { Root } from './styles';

function Button({ children, fullWidth }) {
  return (
    <Root fullWidth={fullWidth}>
      {children}
    </Root>
  );
}

Button.propTypes = {
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  fullWidth: false,
};

export default Button;
