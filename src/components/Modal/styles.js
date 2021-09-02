import styled from 'styled-components';
import { TABLET } from '../../constants/styles';

export const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .4);
`;

export const Container = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 20px;
  background: #fff;

  @media ${TABLET} {
    top: 100px;
    left: calc(50% - 350px);
    bottom: auto;
    right: auto;
    width: 700px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 25px;
  height: 25px;
  background-color: #fff;
  border: none;

  img {
    width: 100%;
  }
`;
