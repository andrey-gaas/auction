import styled from 'styled-components';
import { TABLET, DESCTOP, LAPTOP } from '../../constants/styles';

export const Root = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0 16px;

  @media ${TABLET} {
    width: 700px;
  }

  @media ${LAPTOP} {
    width: 1100px;
  }

  @media ${DESCTOP} {
    width: 1490px;
  }
`;
