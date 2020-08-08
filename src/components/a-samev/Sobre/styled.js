import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

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

  margin-bottom: 10px;

  ${media.lessThan("630px")`
    text-align: center;
  `}
`

export const Description = styled.h1`
  font-family: "Roboto";
  font-size: 20px;
  line-height: 30px;
  text-align: justify;

  margin-bottom: 40px;
  color: #000;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  ${media.lessThan("630px")`
  justify-content: center;
  `}
`

export const Button = styled(Link)`
  padding: 11px 49px;

  display: block;
  background: #bbf7b2;
  border-radius: 10px;
  border: none;
  color: #060761;

  font-family: "Roboto Condensed";
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  text-decoration: none;

  white-space: nowrap;

  ${media.lessThan("425px")`
    width: 100%;
  `}
`