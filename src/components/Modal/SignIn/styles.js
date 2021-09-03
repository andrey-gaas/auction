import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../../constants/styles';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  align-self: center;
  font-size: 26px;
`;

export const Input = styled.input`
  margin-top: 30px;
  padding: 5px 10px;
  width: 100%;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const ButtonContainer = styled.div`
  align-self: center;
  margin-top: 30px;
  width: 240px;
`;

export const Text = styled.p`
  align-self: center;
  margin: 60px auto 0;
  font-size: 16px;
  color: ${PRIMARY_COLOR};
`;

export const Link = styled.button`
  margin-left: 5px;
  font-size: 16px;
  text-decoration: underline;
  border: none;
  background: inherit;
  cursor: pointer;
`;
