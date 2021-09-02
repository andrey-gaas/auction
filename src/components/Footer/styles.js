import styled from 'styled-components';
import { SECONDARY_COLOR, TABLET } from '../../constants/styles';

export const Root = styled.footer`
  margin-top: 20px;
  padding: 20px 0;
  background-color: ${SECONDARY_COLOR};

  @media ${TABLET} {
    margin-top: 40px;
    padding: 40px 0;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
`;

export const Logo = styled.img`
  margin-right: 5px;
  height: 50px;
`;
