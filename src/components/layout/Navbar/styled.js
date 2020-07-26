import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const NavbarWrapper = styled.div`
  align-items: center;
  background-color: #060761;
  display: flex;
  height: 100px;
  justify-content: center;
`
export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 75%;
`
export const LogoContainer = styled.div`
  background-color: #f6ab00;
  width: 10%;
`

export const MenuContainer = styled.ul`
  display: flex;
  justify-content: space-between;

  ${props =>
    props.active === "activeMenu" &&
    css`
      left: 0;
    `}
`

export const MenuItem = styled(Link)`
  color: #fff;
  font-family: "Abel";
  font-size: 16px;
  text-decoration: none;
  padding: 10px 20px;

  &:active,
  &:hover {
    color: #f6ab00;
  }
`
