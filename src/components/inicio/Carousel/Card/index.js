import React from "react"
import * as S from "./styled"

function Card({ nome, especialidade, palestras, url }) {

  const path = `../../../../../${url}`

  return (
    <>
      <S.CardContainer>
        <S.CardImage path={path} />
        <S.CardNome>{nome}</S.CardNome>
        <S.CardEspecialidade>{especialidade}</S.CardEspecialidade>
        {palestras.map((palestras, i) => (
          <S.CardPalestras key={`${i}${url}`}>{palestras.tema}</S.CardPalestras>
        ))}
        ;
      </S.CardContainer>
    </>
  )
}

export default Card
