import styled from 'styled-components';
import { DESCTOP, LAPTOP, TABLET } from '../../constants/styles';

export const Root = styled.main`
  margin-top: 80px;

  @media ${TABLET} {
    margin-top: 120px;
  }

  @media ${DESCTOP} {
    margin-top: 140px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;

  @media ${TABLET} {
    margin-top: 60px;
  }

  @media ${DESCTOP} {
    margin-top: 80px;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  text-transform: uppercase;

  @media ${TABLET} {
    font-size: 26px;
  }

  @media ${DESCTOP} {
    font-size: 32px;
  }
`;

export const Description = styled.p`
  margin-top: 20px;
  font-size: 16px;

  @media ${TABLET} {
    font-size: 18px;
  }
`;

export const BuyButtonContainer = styled.div`
  display: none;
  margin-left: 20px;

  @media ${TABLET} {
    display: inline-block;
  }
`;

export const FilterButtonContainer = styled.div`
  margin-left: auto;
`;

export const Grid = styled.section`
  display: flex;
  flex-direction: column;

  @media ${TABLET} {
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: -20px;
  }

  @media ${DESCTOP} {
    margin-right: -40px;
  }
`;

export const CardContainer = styled.div`
  margin-top: 20px;
  width: 100%;

  @media ${TABLET} {
    margin-right: 20px;
    width: 324px;
  }

  @media ${LAPTOP} {
    width: 342px;
  }

  @media ${DESCTOP} {
    margin-right: 40px;
    margin-top: 40px;
    width: 334px;
  }
`;
