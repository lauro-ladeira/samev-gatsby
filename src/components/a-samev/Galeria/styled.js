import styled, { createGlobalStyle, css } from "styled-components"
import media from "styled-media-query"

export const GlobalStyles = createGlobalStyle`

  /* Estilo da legenda, sempre colocar !important pra forçar a alteração */
  .ril__captionContent {
    padding: 10px 20px;
    color: #fff !important;
  }

  /* Container da legenda, posicionei ela no centro, o default é pra esqueda */
  .ril__caption {
    /* justify-content: center; */
  }
`

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
`

export const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 50px 0;

  ${media.lessThan("large")`
    width: 85%;
  `}
`

export const Title = styled.h1`
  font-family: "Roboto Condensed";
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: #060761;
  margin-bottom: 20px;

  ${media.lessThan("630px")`
    text-align: center;
  `}
`

export const CardImage = styled.div`
  ${props =>
    props.path &&
    css`
      background-image: url(${props.path});
    `}
  /* background-image: url("../../../../XX SAMEV 10.jpg"); */
  background-position: center;
  background-repeat: no-repeat;

  background-size: 135%;
  height: 180px;
  margin: 5px;
  width: 180px;

  ${media.lessThan("480px")`
    height: 100px;
    width: 100px;
  `}
`

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const Thumb = styled.div`
  cursor: pointer;
`
