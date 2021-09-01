import styled from 'styled-components';
import { TABLET, LAPTOP, DESCTOP } from '../../constants/styles';

export const Root = styled.header`
  background: #FFF;
`;

export const Grid = styled.div`
  display: flex;
  padding: 10px 0;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;

  @media ${TABLET} {
    height: 60px;
  }

  span {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;

    @media ${TABLET} {
      font-size: 24px;
    }

    @media ${DESCTOP} {
      font-size: 28px;
    }
  }
`;

export const Logo = styled.img`
  margin-right: 5px;
  height: 100%;
`;
