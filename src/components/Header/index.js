import React from 'react'
import logo from '../.././cgwiwmt.png'
import gridicon from '../.././icons/2.png'
import paticon from '../.././icons/1.png'
import login from '../.././icons/3.png'

import { PrimaryNav, MenuLink, LoginLink, Menu } from './NavElement.js'
import { Link, useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from '../.././constants';

const Navbar = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem(AUTH_TOKEN);
  return (
    <>
      <PrimaryNav>
        <Menu>
          <MenuLink to="/home" >
            <img src={logo} alt="Logo" id="logo" style={{ height: '40px' }} />

          </MenuLink>
          <MenuLink to="/pattern_editor" >
            Grid Editor
          </MenuLink>
          <MenuLink to="/pattern_viewer" >
            Pattern Reader          
            </MenuLink>
          <LoginLink to="/login"  >
            <img src={login} alt="Logo" id="logo" style={{ height: '40px' }} />

          </LoginLink>

        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar