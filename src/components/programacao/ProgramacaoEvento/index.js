import React from "react"
import * as S from "./styled"

const ProgramacaoEvento = () => {
  return (
    <S.ProgramacaoWrapper>
      <S.ProgramacaoContainer>
        <S.DayBox>
          <S.TitleBox>
            <S.Title>24/11 - TERÇA-FEIRA</S.Title>
          </S.TitleBox>
          <S.GridContainer>
            <S.Row>
              <S.Column style={{ fontWeight: "bold", textAlign: "right" }}>8h - 11h</S.Column>
              <S.Column>
                VÍDEO DE ABERTURA - COMISSÃO COORDENADORA SAMEV 2020{" "}
              </S.Column>
            </S.Row>
            <S.Row style={{ backgroundColor: "#eee" }}>
              <S.Column style={{ fontWeight: "bold", textAlign: "right" }}>8h - 11h</S.Column>
              <S.Column>
                Carla Maris Machado Bittar - "Colostragem: Como obter a máxima
                eficiência na transferência de imunidade passiva"
              </S.Column>
            </S.Row>
            <S.Row>
              <S.Column style={{ fontWeight: "bold", textAlign: "right" }}>MANHÃ</S.Column>
              <S.Column>
                Júlia Pessoa - “Fisioterapia em pequenos animais: modalidades
                terapêuticas”{" "}
              </S.Column>
            </S.Row>
            <S.Row style={{ backgroundColor: "#eee" }}>
              <S.Column style={{ fontWeight: "bold", textAlign: "right" }}>GRAVADAS</S.Column>
              <S.Column>
                Shara Regina – “Leishmaniose, esporotricose e a atuação do
                médico veterinário no Centro de Controle de Zoonoses”
              </S.Column>
            </S.Row>
            <S.Row>
              <S.Column style={{ fontWeight: "bold", textAlign: "right" }}>8h - 11h</S.Column>
              <S.Column>
                Tays Araujo Camilo - "As aves e a saúde pública"
              </S.Column>
            </S.Row>
            <S.Row style={{ backgroundColor: "#eee" }}>
              <S.Column style={{ fontWeight: "bold", textAlign: "right" }}>8h - 11h</S.Column>
              <S.Column>
                Marco Roberto Bourg de Mello - " Clonagem por transferência
                Nuclear em Bovinos"
              </S.Column>
            </S.Row>
          </S.GridContainer>
        </S.DayBox>
      </S.ProgramacaoContainer>
    </S.ProgramacaoWrapper>
  )
}

export default ProgramacaoEvento
