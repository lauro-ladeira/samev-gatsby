import React from "react"
import * as S from "./styled"

const Sobre = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Apoio</S.Title>
        <S.ApoiadoresContainer>
          <S.Apoiador />
          <S.Apoiador />
          <S.Apoiador />
        </S.ApoiadoresContainer>
      </S.Container>
    </S.Wrapper>
  )
}

export default Sobre
