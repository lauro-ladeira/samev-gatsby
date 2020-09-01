import React, { useState, useEffect } from "react"
import * as S from "./styled"

function Card({ nome, especialidade, palestras, url, descricao }) {
  const [active, setActive] = useState(false)

  const escFunction = event => {
    if (event.keyCode === 27) {
      setActive(false)
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", escFunction, false)

    return () => {
      window.removeEventListener("keydown", escFunction, false)
    }
  }, [])

  const toggleClassName = () => {
    const currentState = active
    setActive(!currentState)
  }

  const path = `../../../../../${url}`

  return (
    <>
      <S.Box active={active ? "activeBox" : null}>
        <S.Header>
          <S.CloseButton
            onClick={toggleClassName}
            active={active ? "activeClose" : null}
          >
            +
          </S.CloseButton>
        </S.Header>
        <S.Info>
          <S.CardImage path={path} active={active ? "activeAvatar" : null} />
          <S.CardNome active={active ? "activeName" : null}>{nome}</S.CardNome>
        </S.Info>
        <S.TextBox>{descricao}</S.TextBox>
      </S.Box>
      <S.CardContainer
        onClick={toggleClassName}
        active={active ? "activeClose" : null}
      >
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
