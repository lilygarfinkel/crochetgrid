import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
export const PrimaryNav = styled.nav`
  z-index: 14;
  height: 40px;
  display: flex;
  background: #6a9c89;
  justify-content: space-between;
  position: fixed;
  left:0;
  right:0; 
  top: 0;
  
  // padding: 0.18rem calc((100vw - 1000px) / 2);
`
export const MenuLink = styled(Link)`
  padding: 0 5px;
  display:flex;
  align-items:center;
  bottom:0;
  color: #000000;
  height: 40px;
  margin-top:5px;
  font-size: 12px;
  &.active {
    background: #f5e8b7;
    border:1px solid #f5e8b7;
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
    color: #FFFBEF;
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
      background-color: #f5e8b7;
      }

`

export const SubA = styled(StyledA)`
    text-decoration: none;
    display: block;
    text-align: right;
    background-color: #FFFBEF;
    // padding: 10px;
 
 
`