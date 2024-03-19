import React from 'react'
import logo from './big_logo.png'
import small_logo from './gridgraph_icon.png'
import login from '../.././icons/3.png'
import gg from './gridgraph_orange.png'


// import icon from '../.././icons/gridgraph_icon.png'


import { PrimaryNav, MenuLink, LoginLink, Menu, DropDownContent, SubA, DropDownLi, StyledA } from './NavElement.js'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {


  return (
    <>
      <PrimaryNav>
      
        <div id='imgC' style={{width:'100vw',position:'absolute', textAlign:'center'}}>
          <img id='img' src={logo} style={{height:'50px', position:'relative'}}></img>
        </div>
        
        {/* <Menu>
          <MenuLink to="/" >
            <img src={gg} alt="Logo" id="logo" style={{ height: '30px' }} />

          </MenuLink>
          <MenuLink to="/pattern_editor" >
            Grid Editor
          </MenuLink>
          <MenuLink to="/pattern_viewer" >
            Pattern Reader          
            </MenuLink>
            <DropDownLi>
                    <StyledA>
                    <img src={login} alt="Logo" id="logo" style={{ height: '40px' }} />
                    </StyledA>
                    <DropDownContent>
                        {" "}
                        <SubA to='/files'>
                            Files
                        </SubA>
                        <SubA to="/login">
                            Login | Sign Up
                        </SubA>
                        <SubA onClick={() => this.handleClick("Link3")}>
                            Sign out
                        </SubA>
                    </DropDownContent>
                </DropDownLi>


                    {/* <LoginLink to="/login"  >

          </LoginLink> */}
        {/* </Menu> */} 
      </PrimaryNav>
    </>
  )
}
export default Navbar