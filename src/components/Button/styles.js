import styled from 'styled-components';
import { PRIMARY_COLOR, TABLET } from '../../constants/styles';

export const Root = styled.button`
  padding: 5px 12px;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  font-size: 16px;
  color: #FFF;
  background: linear-gradient(#f7a15d, ${PRIMARY_COLOR});
  border: none;
  cursor: pointer;
  border-radius: 7px;

  @media ${TABLET} {
    
  }
`;
