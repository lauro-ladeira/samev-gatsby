import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

import HeaderImage from "../../../images/pessoas-samev-2019.jpg"

export const HeaderWrapper = styled.div`
  background-image: linear-gradient(
      180deg,
      #060761 12.31%,
      rgba(6, 7, 97, 0) 144.2%
    ),
    url(${HeaderImage});
  background-position: center;

  width: 100%;
  height: 80vh;
`

export const HeaderContainer = styled.div`
  margin: 0 auto;
  display: flex;
  width: 75%;
  padding-top: 150px;

  ${media.lessThan("large")`
    width: 85%;
    padding-top: 100px;
  `}

  ${media.lessThan("medium")`
   flex-direction: column;
  `}

`

export const TitleContainer = styled.div`
  width: 70%;
  height: 100%;

  ${media.lessThan("medium")`
    width: 100%;
  `}
  ${media.lessThan("630px")`
    text-align: center;
  `}
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  padding: 30px 10px;

  ${media.lessThan("medium")`
    justify-content: flex-start;
    padding: 30px 0;
  `}
  ${media.lessThan("630px")`
    justify-content: center;
  `}
`

export const Title = styled.h1`
  font-size: 48px;
  line-height: 56px;
  color: #ffffff;
  font-family: 'Roboto Condensed';
  font-weight: bold;

  ${media.lessThan("910px")`
    font-size: 42px;
    line-height: 48px;
  `}

  ${media.lessThan("470px")`
    font-size: 24px;
    line-height: 32px;
  `}

  ${media.lessThan("388px")`
    font-size: 20px;
    line-height: 32px;
  `}
`

export const Description = styled(Title)`
  font-size: 36px;
  line-height: 42px;
  
  ${media.lessThan("910px")`
    font-size: 32px;
    line-height: 38px;
  `}

  ${media.lessThan("470px")`
    font-size: 20px;
    line-height: 24px;
  `}

  ${media.lessThan("388px")`
    font-size: 18px;
    line-height: 22px;
  `}
`


export const Color = styled(Description)`
  color: #f6ab00;
`

export const Break = styled.br``

export const Button = styled(Link)`
  padding: 6px 56px;

  display: block;
  background: #f6ab00;
  border-radius: 10px;
  border: none;
  color: #060761;

  font-family: Roboto Condensed;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  text-decoration: none;

  white-space: nowrap;
`
