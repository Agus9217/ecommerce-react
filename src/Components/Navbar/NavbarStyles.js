import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 60px;
  border: 1px solid red;
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
`
export const NavbarList = styled.ul`

`

export const NavbarItem = styled.li`

`
export const NavbarAnchor = styled(Link)`
  color: white;
`

export const NavbarImg = styled.img`
  max-width: 50px;
  width: 100%;
`

export const NavbarTitle = styled.h1`
  font-size: 1.5rem;
  color: white;
`