import React from 'react'
import { NavbarContainer, NavbarImg, NavbarItem, NavbarAnchor, NavbarList, NavbarLogo, NavbarMenu, NavbarTitle } from './NavbarStyles'
import ImgLogo from '../../assets/images/logo.png'

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLogo>
        <NavbarImg src={ ImgLogo } />
        <NavbarTitle> Kinnectric </NavbarTitle>
      </NavbarLogo>
      <NavbarMenu>
        <NavbarList>
          <NavbarItem>
            <NavbarAnchor to='/'>Home</NavbarAnchor>
          </NavbarItem>
        </NavbarList>
      </NavbarMenu>
    </NavbarContainer>
  )
}

export default Navbar