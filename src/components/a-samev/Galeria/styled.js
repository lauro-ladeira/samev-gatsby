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