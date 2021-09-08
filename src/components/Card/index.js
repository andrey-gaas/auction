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

function Card({ type, data }) {

  return (
    <Root type={type}>
      <Image
        src={data.image}
        alt={data.title}
      />
      <Title>
        {data.title}
      </Title>
      <PriceContainer>
        <Price>
          {data.price} &#8381;
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
            {data.lastUser}
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
  type: PropTypes.string.isRequired,
  data: PropTypes.shape({
    image:    PropTypes.string.isRequired,
    lastUser: PropTypes.string,
    price:    PropTypes.number.isRequired,
    status:   PropTypes.string.isRequired,
    title:    PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
