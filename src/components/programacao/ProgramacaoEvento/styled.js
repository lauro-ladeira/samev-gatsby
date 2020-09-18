import styled from "styled-components"
import media from "styled-media-query"

export const ProgramacaoWrapper = styled.div`
  width: 100%;
  background-color: #6bc1dd;
`

export const ProgramacaoContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 75%;
  padding: 50px 0;

  ${media.lessThan("large")`
    width: 85%;
  `}
`
export const DayBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  width: 100%;
  padding-bottom: 15px;
  margin-bottom: 10px;
`
export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #060761;
  border-radius: 20px 20px 0 0;
  height: 50px;
  width: 100%;
`

export const Title = styled.h1`
  font-size: 30px;
  line-height: 35px;
  color: #fff;
  font-family: "Roboto Condensed";
  font-weight: bold;

  ${media.lessThan("910px")`
    font-size: 26px;
    line-height: 50px;
  `}

  ${media.lessThan("388px")`
    font-size: 22px;
  `}
`
export const GridContainer = styled.div`
  margin-top: 0;
  width: 100%;
`
export const Row = styled.div`
  font-family: "Roboto Condensed";
  display: grid;
  grid-template-columns: 1fr 5fr;

  ${media.lessThan("700px")`
  grid-template-columns: 30% 70%;
  `}
`

export const RowGravadas = styled.div`
  font-family: "Roboto Condensed";
  display: grid;
  grid-template-columns: 5fr;

  ${media.lessThan("700px")`
  grid-template-columns: 30% 70%;
  `}
`

export const Column = styled.div`
  display: inline-block;
  padding: 15px;
`

export const ColumnGravadas = styled.div`
  display: inline-block;
  text-align: center;
  padding: 15px;
`
