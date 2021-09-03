import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Root, Title, Input, ButtonContainer, Text, Link } from './styles';
import Button from '../../Button';

function SignIn({ setType }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Root>
      <Title>Вход</Title>
      <Input
        type="text"
        name="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
        placeholder="Ваш E-Mail"
      />
      <Input
        type="password"
        name="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
        placeholder="Пароль"
      />
      <ButtonContainer>
        <Button fullWidth>Войти</Button>
      </ButtonContainer>

      <Text>Нет аккаунта? <Link onClick={() => setType('sign-up')}>Зарегистрируйтесь!</Link></Text>
    </Root>
  );
}

SignIn.propTypes = {
  setType: PropTypes.func.isRequired,
};

export default SignIn;
