import React from "react"
import * as S from "./styled"

import resumos from "../../../data/resumos.json"

const Resumos = () => {
  return (
    <S.Wrapper>
      <S.Container>
        {/* <S.Title>Informações em breve</S.Title> */}
        <S.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ante
          dolor, molestie ut nisi nec, luctus eleifend dolor. Donec in lobortis
          leo. Pellentesque venenatis lacus non enim mollis vehicula. Vestibulum
          nec rhoncus tortor. Donec aliquet egestas pulvinar. Praesent eget
          lorem eget diam semper porta. Aliquam ante nisl, faucibus non tellus
          in, tempor dignissim ex.
        </S.Description>
        <S.ButtonsContainer>
          <S.Button
            to="https://drive.google.com/file/d/12Qcj8aUrI74yt2arY8rFG26sBCEsVos_/view?usp=sharing"
            target="_blank"
          >
            Edital
          </S.Button>
          <S.Button
            to="https://drive.google.com/file/d/1zsS10pwjpM--eyfSGml1m-qQkUkoL0BZ/view?usp=sharing"
            target="_blank"
          >
            Modelo de Resumo
          </S.Button>
        </S.ButtonsContainer>
        <S.Title>Resumos</S.Title>
      </S.Container>
      <S.ResumosContainer>
        {resumos.map(el => {
          return (
            <S.Card key={Math.random()}>
              <S.TitleCard>{el.titulo}</S.TitleCard>
              <S.CardBottom>
                {el.autores.map((autores, i) => {
                  return (
                    <S.CardAuthor key={Math.random()}>
                      {autores.autor}
                    </S.CardAuthor>
                  )
                })}
              </S.CardBottom>
            </S.Card>
          )
        })}
      </S.ResumosContainer>
    </S.Wrapper>
  )
}

export default Resumos
