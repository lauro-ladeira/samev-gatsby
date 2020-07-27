import React from "react"
import * as S from "./styled"

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.TitleContainer>
          <S.Title>
            XXII SAMEV <S.Break />
          </S.Title>
          <S.Description>
            Semana Acadêmica de Medicina Veterinária <S.Break />
          </S.Description>
          <S.Color>
            de 01 a 02 de novembro <S.Break />
          </S.Color>
          <S.Color style={{fontWeight: 'normal'}}>
            Evento Online
          </S.Color>
        </S.TitleContainer>
        <S.ButtonContainer>
          <S.Button to="/">INSCREVA-SE!</S.Button>
        </S.ButtonContainer>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}

export default Header
