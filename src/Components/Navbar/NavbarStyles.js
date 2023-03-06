import { Link } from "react-router-dom";
import { FiShoppingCart } from 'react-icons/fi'
import styled from "styled-components";

export const NavbarContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 60px;
  border: 1px solid #ff3c5f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`

export const NavbarLogo = styled.div`
  max-width: 150px;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const NavbarMenu = styled.nav`
  display: flex;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    transition: all 0.2s ease-in-out;
    display: none;
  }
`

export const NavbarList = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
`

export const NavbarItem = styled.li`
  > hr {
    border: 1px solid transparent;
    border-radius: 5px;
    width: 0;
    transition: all 0.2s ease-in-out;
  }
  &:hover > hr {
    transition: all 0.2s ease-in-out;
    width: 100%;
    border: 1px solid #ff3c5f;
  }
`

export const NavbarLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
`

export const NavbarImg = styled.img`
  max-width: 50px;
  width: 100%;
`

export const NavbarTitle = styled.h1`
  font-size: 1.5rem;
  color: white;
`

export const NavbarCart = styled(FiShoppingCart)`
  font-size: 1.2rem;
  &:hover {
    color: #ff3c5f;
  }
`

export const NavbarMobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: white;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`
 