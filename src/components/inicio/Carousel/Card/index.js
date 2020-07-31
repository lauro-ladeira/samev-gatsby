import React from "react"
import * as S from "./styled"


function Card({ nome, especialidade, palestras, url }) {
  return (
    <>
      <S.CardContainer>
        <S.CardImage url={url} />
        <S.CardNome>{nome}</S.CardNome>
        <S.CardEspecialidade>{especialidade}</S.CardEspecialidade>
        {palestras.map(palestras => (
          <S.CardPalestras>{palestras.tema}</S.CardPalestras>
        ))}
        ;
      </S.CardContainer>
    </>
  )

  console.log(url)
}

export default Card
