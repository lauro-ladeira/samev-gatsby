import React from "react"
import * as S from "./styled"

const Header = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Sobre a SAMEV</S.Title>
        <S.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ante
          dolor, molestie ut nisi nec, luctus eleifend dolor. Donec in lobortis
          leo. Pellentesque venenatis lacus non enim mollis vehicula. Vestibulum
          nec rhoncus tortor. Donec aliquet egestas pulvinar. Praesent eget
          lorem eget diam semper porta. Aliquam ante nisl, faucibus non tellus
          in, tempor dignissim ex.{" "} 
        </S.Description>
        <S.ButtonContainer>
          <S.Button to="/">Saiba mais</S.Button>
        </S.ButtonContainer>
      </S.Container>
    </S.Wrapper>
  )
}

export default Header
