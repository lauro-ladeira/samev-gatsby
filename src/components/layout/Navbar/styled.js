import styled, { css } from "styled-components"
import { Link } from "gatsby"
import media from "styled-media-query"

export const NavbarWrapper = styled.div`
  align-items: center;
  background-color: #060761;
  display: flex;
  height: 80px;
  justify-content: center;
`
export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 75%;

  ${media.lessThan("large")`
    width: 85%;
  `}
`
export const LogoContainer = styled.div`
  background-color: #f6ab00;
  width: 10%;
`

export const MenuContainer = styled.ul`
  ${media.lessThan("804px")`
    align-items: center;
    background-color: #effeff;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 80px);
    justify-content: space-around;
    left: 100%;
    margin: 0 25%;
    position: fixed;
    top: 80px;
    transition: ease-out left .3s;
    width: 75%;
    z-index: 99;

    ${props =>
      props.active === "activeMenu" &&
      css`
        left: 0;
      `}
  `}
`

export const MenuItem = styled.li`
  display: inline-block;

  ${media.lessThan("804px")`
    display: block;
    width: 90%;
  `}
`

export const MenuLink = styled(Link)`
  color: #fff;
  font-family: "Abel";
  font-size: 16px;
  text-decoration: none;
  text-align: center;
  padding: 10px 20px;

  &:active,
  &:hover {
    color: #f6ab00;
  }

  ${media.lessThan("804px")`
    display: block;
    color: #060761;
    border-bottom: 1px solid #ddd;
    font-size: 20px;
    padding: 6% 20px;

    &:hover, &.active {
      font-weight: bold;
  `}
`
export const Burger = styled.div`
  display: none;
  margin: 26px;
  cursor: pointer;

  ${media.lessThan("804px")`
    display: block;
  `}
`

export const BurgerLine = styled.div`
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: all .3s ease;

  ${props =>
    props.active === "activeLine1" &&
    css`
      transform: rotate(-45deg) translate(-5px, 6px);
    `}

  ${props =>
    props.active === "activeLine2" &&
    css`
      opacity: 0;
    `}

  ${props =>
    props.active === "activeLine3" &&
    css`
      transform: rotate(45deg) translate(-5px, -6px);
    `}
`
