import styled, { css } from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

// import banana from '../../../../../img1.png'

export const CardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  width: 80%;
  height: 260px;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  margin: 20px 5px 10px;

  transition: transform 0.6s;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  ${media.lessThan("480px")`
    width: 85%;
  `}
`
export const CardImage = styled.div`
  /* ${props =>
    props.path &&
    css`
      background-image: url(${props.path});
    `}

  /* background-image: url('../../../../../img4.png'); */
  /* background-position: center; */

  /* background-size: 70px; */

  /* border-radius: 50%; */
  height: 70px;
  margin: 20px auto;
  width: 70px;

  ${media.lessThan("480px")`
    height: 100px;
    width: 100px;
    /* background-size: 100px; */
  `}
`

export const CardNome = styled.h1`
  font-family: "Roboto Condensed", "sans-serif";
  font-size: 18px;
  font-weight: bold;
  color: #060761;
  margin-bottom: 10px;
`
export const CardEspecialidade = styled.h2`
  font-family: "Roboto Condensed", "sans-serif";
  font-size: 16px;
  color: #222;
  margin-bottom: 10px;
`
export const CardPalestras = styled.p`
  font-family: "Roboto Condensed", "sans-serif";
  font-size: 14px;
  font-style: italic;
  text-align: center;
  color: #222;
  margin-top: 10px;
`

export const SetImg = styled(Img)`
  border-radius: 50%;
`
