import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import {
  Root,
  Image,
  Title,
  Price,
  Timer,
  User,
  Winner,
  ButtonContainer,
  PriceContainer,
} from './styles';

function Card({ completed, coming }) {
  let type = 'active';

  if (completed) type = 'completed';
  if (coming) type = 'coming';

  console.log(type);

  return (
    <Root type={type}>
      <Image
        src="/images/photo.jpg"
        alt="Игровая видеокарта MSI GAMING GeForce RTX 2080 Ti"
      />
      <Title>
        Игровая видеокарта MSI GAMING GeForce RTX 2080 Ti
      </Title>
      <PriceContainer>
        <Price>
          2260,7 Рублей
        </Price>
        {
          type === 'active' &&
            <Timer type={type}>
              20
            </Timer>
        }
      </PriceContainer>
      {
        type === 'completed' &&
          <Winner>
            Победитель:
          </Winner>
      }
      {
        type !== 'coming' &&
          <User>
            DronDronDronDronDron
          </User>
      }
      {
        type === 'active' &&
          <ButtonContainer>
            <Button fullWidth>Ставка</Button>
          </ButtonContainer>
      }
    </Root>
  );
}

Card.propTypes = {
  completed: PropTypes.bool,
  coming:    PropTypes.bool,
};

Card.defaultProps = {
  completed: false,
  coming:    false,
};

export default Card;
