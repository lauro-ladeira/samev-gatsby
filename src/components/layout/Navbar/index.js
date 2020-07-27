import React from "react"
import * as S from "./styled"

function Navbar() {
  return (
    <S.NavbarWrapper>
      <S.NavbarContainer>
        <S.LogoContainer></S.LogoContainer>
        <S.MenuContainer>
          <S.MenuItem to="/">Início</S.MenuItem>
          <S.MenuItem to="/a-samev">A SAMEV</S.MenuItem>
          <S.MenuItem to="/programacao">Programação</S.MenuItem>
          <S.MenuItem to="/inscricao">Inscrição</S.MenuItem>
          <S.MenuItem to="/resumos">Resumos</S.MenuItem>
          <S.MenuItem to="/contato">Contato</S.MenuItem>
        </S.MenuContainer>
      </S.NavbarContainer>
    </S.NavbarWrapper>
  )
}

export default Navbar
