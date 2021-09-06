import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Root, MenuItem } from './styles';

function Menu({ isOpen, close, signIn, signUp }) {
  const handleClick = func => {
    close();
    func();
  };

  return (
    <Root isOpen={isOpen}>
      <MenuItem onClick={() => handleClick(signIn)}>
        Вход
      </MenuItem>
      <MenuItem onClick={() => handleClick(signUp)}>
        Регистрация
      </MenuItem>
      <Link to="/">
        <MenuItem>
          Главная
        </MenuItem>
      </Link>
      <Link to="/how-it-work">
        <MenuItem>
          Как это работает?
        </MenuItem>
      </Link>
      <Link to="/reviews">
        <MenuItem>
          Отзывы
        </MenuItem>
      </Link>
      <Link to="/support">
        <MenuItem>
          Поддержка
        </MenuItem>
      </Link>
    </Root>
  );
}

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close:  PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
};

export default Menu;
