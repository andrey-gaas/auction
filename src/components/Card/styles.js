import styled from 'styled-components';
import { TABLET, PRIMARY_COLOR, SECONDARY_COLOR } from '../../constants/styles';

export const Root = styled.article`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-style: solid;
  background-color: #fff;

  border-width: ${props => (props.type === 'active' && '1px') || '2px'};
  border-color: ${props => props.completed ? PRIMARY_COLOR : '#ddd'};


  border-color: ${props =>
    (props.type === 'completed' && PRIMARY_COLOR) ||
    (props.type === 'coming' && SECONDARY_COLOR) || '#ddd'
  };

  @media ${TABLET} {
    padding: 20px;
  }
`;

export const Image = styled.img`
  padding: 10px;
  width: 100%;
  box-shadow: 0 0 3px rgba(0, 0, 0, .3);
`;

export const Title = styled.h1`
  margin-top: 20px;
  font-size: 18px;
  text-align: center;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Price = styled.span`
  padding: 5px 35px;
  font-size: 16px;
  border: 1px solid #aaa;
  border-radius: 15px;
`;

export const Timer = styled.span`
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 16px;
  border: 1px solid #aaa;
  border-radius: 15px;
`;

export const Winner = styled.div`
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
  align-self: center;
`;

export const User = styled.span`
  align-self: center;
  margin-top: 10px;
  font-weight: bold;
  font-size: 14px;

  @media ${TABLET} {
    font-size: 16px;
  }
`;

export const ButtonContainer = styled.div`
  align-self: center;
  margin-top: 20px;
  width: 100%;

  @media ${TABLET} {
    width: 70%;
  }
`;
