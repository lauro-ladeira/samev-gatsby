import React, { useState, useEffect } from "react"
import * as S from "./styled"

function Navbar() {
  const [active, setActive] = useState(false)

  const toggleClassName = () => {
    const currentState = active
    setActive(!currentState)
  }

  return (
    <S.NavbarWrapper>
      <S.NavbarContainer>
        <S.LogoContainer></S.LogoContainer>
        <S.MenuContainer active={active ? 'activeMenu' : null}>
          <S.MenuItem>
            <S.MenuLink to="/" activeClassName="active">Início</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink to="/a-samev" activeClassName="active">A SAMEV</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink to="/programacao" activeClassName="active">Programação</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink to="/inscricao" activeClassName="active">Inscrição</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink to="/resumos" activeClassName="active">Resumos</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink to="/contato" activeClassName="active">Contato</S.MenuLink>
          </S.MenuItem>
        </S.MenuContainer>
        <S.Circle active={active ? 'activeMenu' : null} />
        <S.Burger onClick={toggleClassName}>
          <S.BurgerLine active={active ? "activeLine1" : null}></S.BurgerLine>
          <S.BurgerLine active={active ? "activeLine2" : null}></S.BurgerLine>
          <S.BurgerLine active={active ? "activeLine3" : null}></S.BurgerLine>
        </S.Burger>
      </S.NavbarContainer>
    </S.NavbarWrapper>
  )
}

export default Navbar
