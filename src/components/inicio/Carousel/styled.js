import styled from "styled-components"
import media from "styled-media-query"

export const CarouselWrapper = styled.div`
  background: linear-gradient(180deg, #bbf7b2 0%, #6bc1dd 100%);
  width: 100%;
  height: 455px;
`
export const CarouselContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 50px 0;

  ${media.lessThan("large")`
    width: 85%;
  `}
`

export const Title = styled.h1`
  color: #060761;
  font-family: "Roboto Condensed";
  font-size: 36px;
  font-weight: bold;
  line-height: 42px;
  margin-bottom: 10px;

  ${media.lessThan("630px")`
    text-align: center;
  `}
`
