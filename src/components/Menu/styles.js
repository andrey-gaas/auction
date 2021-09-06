import styled from 'styled-components';
import { TABLET, LAPTOP, PRIMARY_COLOR } from '../../constants/styles';

export const Root = styled.div`
  position: fixed;
  top: 60px;
  right: ${props => props.isOpen ? '0' : '-320px'};
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  background: #fff;
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
  transition: .5s;

  @media ${TABLET} {
    top: 80px;
  }

  @media ${LAPTOP} {
    display: none;
  }
`;

export const MenuItem = styled.button`
  padding: 10px;
  width: 100%;
  font-size: 16px;
  text-align: center;
  border: none;
  background: #fff;
  border-bottom: 1px solid #ccc;

  :hover {
    background-color: ${PRIMARY_COLOR};
    color: #fff;
  }
`;
