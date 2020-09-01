import styled from "styled-components"
// import Img from 'gatsby-image'
// import media from "styled-media-query"
// import { Link } from "gatsby"

// import ApoiadorImage from "../../../../apoiador.jpg"

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
`

export const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 20px 0;
`

export const Title = styled.h1`
  font-family: "Roboto Condensed";
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: #060761;

  margin-bottom: 20px;
`

export const ApoiadoresContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

export const ImgWrapper = styled.div`
  /* background: red; */
  width: 400px;
  margin: 0 3px 20px;
`;
