import React from "react"
import * as S from "./styled"

function Card({ nome, especialidade, palestras }) {
  return (
    <>
      <S.CardContainer>
        <S.CardNome>{nome}</S.CardNome>
        <S.CardEspecialidade>{especialidade}</S.CardEspecialidade>
        {palestras.map(function (palestras) {
          return <S.CardPalestras>{palestras.tema}</S.CardPalestras>
        })}
      </S.CardContainer>
    </>
  )
}

export default Card
