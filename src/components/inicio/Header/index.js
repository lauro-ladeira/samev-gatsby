import React from "react"
import * as S from "./styled"

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.TitleContainer>
          <S.Title>XXII SAMEV</S.Title>
          <S.Color
            style={{
              color: "#BBF6B2",
              fontStyle: "italic",
              fontWeight: "normal",
            }}
          >
            {" "}
            Especialidades
          </S.Color>
          <S.Description>
            Semana Acadêmica de Medicina Veterinária <S.Break />
          </S.Description>
          <S.Color>
            de 01 a 02 de novembro <S.Break />
          </S.Color>
          <S.ColorSmaller style={{ fontWeight: "normal" }}>
            Evento Online
          </S.ColorSmaller>
        </S.TitleContainer>
        <S.ButtonContainer>
          <S.Button
            to="/inscricao"
            target="_blank"
          >
            INSCREVA-SE!
          </S.Button>
        </S.ButtonContainer>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}

export default Header
