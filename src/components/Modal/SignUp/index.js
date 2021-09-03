import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Root, Title, Input, ButtonContainer, Text, Link } from './styles';
import Button from '../../Button';

function SignUp({ setType }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Root>
      <Title>Регистрация</Title>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={event => setName(event.target.value)}
        placeholder="Ваше имя на сайте"
      />
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
        placeholder="Придумайте пароль"
      />
      <ButtonContainer>
        <Button fullWidth>Регистрация</Button>
      </ButtonContainer>

      <Text>Уже есть аккаунт? <Link onClick={() => setType('sign-in')}>Войдите!</Link></Text>
    </Root>
  );
}

SignUp.propTypes = {
  setType: PropTypes.func.isRequired,
};

export default SignUp;
