import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
export const PrimaryNav = styled.nav`
  z-index: 14;
  height: 50px;
  display: flex;
  background: #BACF1D;
  justify-content: space-between;
  padding: 0.18rem calc((100vw - 1000px) / 2);
`
export const MenuLink = styled(Link)`
  padding: 0 1.2rem;
  bottom:0;
  color: #000000;
  height: 50px;
  &.active {
    background: #DFF988;
  }
`
export const LoginLink = styled(Link)`
   padding: 0 1.2rem;
  height: 100%;
  display: block;
  font-size: 1.9rem;
  top: 0;
  right: 0;
  position: absolute;
  &.active {
    color: #000000;
  }
`
export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -25px;
  // @media screen and (max-width: 768px) {
  //   display: none;
  // }
`