import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
export const PrimaryNav = styled.nav`
  z-index: 14;
  height: 40px;
  display: flex;
  background: #BACF1D;
  justify-content: space-between;
  padding: 0.18rem calc((100vw - 1000px) / 2);
`
export const MenuLink = styled(Link)`
  padding: 0 1.2rem;
  align-items:center;
  bottom:0;
  color: #000000;
  height: 40px;
  margin-top:5px;
  &.active {
    background: #DFF988;
    border:1px solid #DFF988;
    border-radius:3px;
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
    color: #DFF988;
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

export const DropDownContent = styled.div`
    display: none;
    position: absolute;
    min-width: 100px;
    right:0;
    z-index: 10;
   
`;

export const DropDownLi = styled(Link)`
    display: inline-block;
    right: 0;
    position: absolute;
    &:hover ${DropDownContent} {
        display: block;
    }
`

export const StyledA = styled(Link)`
    display: inline-block;
    text-align: center;
    text-decoration: none;
    color:black;
    &:hover {
      background-color: #DFF988;
      }

`

export const SubA = styled(StyledA)`
    text-decoration: none;
    display: block;
    text-align: right;
    background-color: #BACF1D;
    padding: 10px;
 
 
`