import React from "react"
import * as S from "./styled"
import Form from "./Form"
import Pay from "./Pay"

import precos from "../../../data/precos.json"

const Inscricao = () => {
  return (
    <S.InscricaoWrapper>
      <S.InscricaoContainer>
        {/* <S.Title>Título</S.Title> */}
        <S.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ante
          dolor, molestie ut nisi nec, luctus eleifend dolor. Donec in lobortis
          leo. Pellentesque venenatis lacus non enim mollis vehicula. Vestibulum
          nec rhoncus tortor. Donec aliquet egestas pulvinar. Praesent eget
          lorem eget diam semper porta. Aliquam ante nisl, faucibus non tellus
          in, tempor dignissim ex.
        </S.Description>
        <S.ButtonsContainer>
          <S.Button><S.Img><Form /></S.Img>Preencha o formulário</S.Button>
          <S.Button><S.Img><Pay /></S.Img>Faça o Pagamento</S.Button>
        </S.ButtonsContainer>
        <S.TableContainer>
        {precos.map(el => {
          return (
            <S.TableBox key={Math.random()}>
              <S.TitleBox>
                <S.TableTitle>{el.modalidade}</S.TableTitle>
              </S.TitleBox>
              <S.GridContainer>
                {el.tabela.map((tabela, i) => {
                  return (
                    <S.Row
                      style={i % 2 !== 0 ? { backgroundColor: "#eee" } : {}}
                      key={Math.random()}
                    >
                      <S.Column>
                        <strong>{tabela.lote}</strong><br />
                        <S.Obs>{tabela.observacao}{" "}</S.Obs>
                      </S.Column>
                      <S.Column>
                        <strong>{tabela.data}</strong><br />
                        <S.Obs>{tabela.obs}{" "}</S.Obs>
                      </S.Column>
                      <S.Column>
                        <strong>{tabela.preco}</strong>
                      </S.Column>
                    </S.Row>
                  )
                })}
              </S.GridContainer>
            </S.TableBox>
          )
        })}
        </S.TableContainer>
      </S.InscricaoContainer>
    </S.InscricaoWrapper>
  )
}

export default Inscricao
