import styled from 'styled-components';
import { TABLET, DESCTOP, LAPTOP } from '../../constants/styles';

export const Root = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #FFF;
  box-shadow: 0 0 5px rgba(0, 0, 0, .3);
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
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

export const Nav = styled.nav`
  display: none;
  margin-left: 20px;

  @media ${LAPTOP} {
    display: block;
    margin-left: 40px;
  }
`;

export const NavItem = styled.span`
  margin-left: 30px;
  font-size: 16px;

  a {
    text-decoration: none;
  }
`;

export const AuthContainer = styled.div`
  display: none;
  margin-left: auto;

  @media ${LAPTOP} {
    display: block;
  }

  button {
    margin-left: 10px;
  }
`;

export const MenuButton = styled.button`
  margin-left: auto;
  padding: 0;
  width: 34px;
  height: 34px;
  border: none;
  background: inherit;
  img {
    width: 100%;
  }

  @media ${LAPTOP} {
    display: none;
  }
`;
