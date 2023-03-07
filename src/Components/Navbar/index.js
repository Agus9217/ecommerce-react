import React from 'react'
import { NavbarCart, NavbarContainer, NavbarImg, NavbarItem, NavbarLink, NavbarList, NavbarLogo, NavbarMenu, NavbarMobileIcon, NavbarTitle } from './NavbarStyles'
import ImgLogo from '../../assets/images/logo.png'
import { FiMenu } from 'react-icons/fi'

const Navbar = ({ toggle }) => {
  return (
    <NavbarContainer>
      <NavbarLogo>
        <NavbarImg src={ ImgLogo } />
        <NavbarTitle> Kinnectric </NavbarTitle>
      </NavbarLogo>
      <NavbarMobileIcon onClick={ toggle } >
        <FiMenu />
      </NavbarMobileIcon>
      <NavbarMenu>
        <NavbarList>
          <NavbarItem>
            <NavbarLink to='/'>Home</NavbarLink><hr/>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink>Productos</NavbarLink><hr/>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink>Contacto</NavbarLink><hr/>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink><NavbarCart /></NavbarLink>
          </NavbarItem>
        </NavbarList>
      </NavbarMenu>
    </NavbarContainer>
  )
}

export default Navbar