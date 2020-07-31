import styled from "styled-components"
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
  justify-content: space-between;
  width: 100%;
  height: 260px;
`

export const Apoiador = styled.div`
  margin: 20px;
  width: 100%;
  background-size: contain;
  background-image: url("../../../../apoiador.jpg");
  background-position: center;
`
