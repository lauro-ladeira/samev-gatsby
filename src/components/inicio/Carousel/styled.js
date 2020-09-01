import styled, { css } from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

// export const SampleNextArrow = styled.div`
//   width: 256px;
//   height: 100%;
//   position: absolute;
//   transform: scale(0.2) translate(600px, -750px);
//   background-repeat: no-repeat;
//   background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjI4NC45MzVweCIgaGVpZ2h0PSIyODQuOTM2cHgiIHZpZXdCb3g9IjAgMCAyODQuOTM1IDI4NC45MzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4NC45MzUgMjg0LjkzNjsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTIyMi43MDEsMTM1LjlMODkuNjUyLDIuODU3Qzg3Ljc0OCwwLjk1NSw4NS41NTcsMCw4My4wODQsMGMtMi40NzQsMC00LjY2NCwwLjk1NS02LjU2NywyLjg1N0w2Mi4yNDQsMTcuMTMzDQoJCWMtMS45MDYsMS45MDMtMi44NTUsNC4wODktMi44NTUsNi41NjdjMCwyLjQ3OCwwLjk0OSw0LjY2NCwyLjg1NSw2LjU2N2wxMTIuMjA0LDExMi4yMDRMNjIuMjQ0LDI1NC42NzcNCgkJYy0xLjkwNiwxLjkwMy0yLjg1NSw0LjA5My0yLjg1NSw2LjU2NGMwLDIuNDc3LDAuOTQ5LDQuNjY3LDIuODU1LDYuNTdsMTQuMjc0LDE0LjI3MWMxLjkwMywxLjkwNSw0LjA5MywyLjg1NCw2LjU2NywyLjg1NA0KCQljMi40NzMsMCw0LjY2My0wLjk1MSw2LjU2Ny0yLjg1NGwxMzMuMDQyLTEzMy4wNDRjMS45MDItMS45MDIsMi44NTQtNC4wOTMsMi44NTQtNi41NjdTMjI0LjYwMywxMzcuODA3LDIyMi43MDEsMTM1Ljl6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==);
//   /* background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDI4NC45MzUgMjg0LjkzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjg0LjkzNSAyODQuOTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PGc+Cgk8cGF0aCBkPSJNMjIyLjcwMSwxMzUuOUw4OS42NTIsMi44NTdDODcuNzQ4LDAuOTU1LDg1LjU1NywwLDgzLjA4NCwwYy0yLjQ3NCwwLTQuNjY0LDAuOTU1LTYuNTY3LDIuODU3TDYyLjI0NCwxNy4xMzMgICBjLTEuOTA2LDEuOTAzLTIuODU1LDQuMDg5LTIuODU1LDYuNTY3YzAsMi40NzgsMC45NDksNC42NjQsMi44NTUsNi41NjdsMTEyLjIwNCwxMTIuMjA0TDYyLjI0NCwyNTQuNjc3ICAgYy0xLjkwNiwxLjkwMy0yLjg1NSw0LjA5My0yLjg1NSw2LjU2NGMwLDIuNDc3LDAuOTQ5LDQuNjY3LDIuODU1LDYuNTdsMTQuMjc0LDE0LjI3MWMxLjkwMywxLjkwNSw0LjA5MywyLjg1NCw2LjU2NywyLjg1NCAgIGMyLjQ3MywwLDQuNjYzLTAuOTUxLDYuNTY3LTIuODU0bDEzMy4wNDItMTMzLjA0NGMxLjkwMi0xLjkwMiwyLjg1NC00LjA5MywyLjg1NC02LjU2N1MyMjQuNjAzLDEzNy44MDcsMjIyLjcwMSwxMzUuOXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzA2MDc1OSIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+); */
// `

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
  text-align: center;
`
export const CardEspecialidade = styled.h2`
  font-family: "Roboto Condensed", "sans-serif";
  font-size: 16px;
  color: #222;
  margin-bottom: 10px;
  text-align: center;
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
  width: 70px;
  height: 70px;
  border-radius: 50%;
`

export const Box = styled.div`
  display: none;
  ${props =>
    props.active === "activeBox" &&
    css`
      position: fixed;
      top: 50px;
      background-color: white;
      border-radius: 20px;
      box-shadow: 0 0 0 130vw rgba(9, 7, 97, 0.9);
      padding: 20px;
      max-height: 90vh;
      width: 60%;

      display: flex;
      align-items: center;
      flex-direction: column;

      z-index: 99;
    `}

  ${media.lessThan("1200px")`
    width: 80%;
  `}

  ${media.lessThan("890px")`
    max-height: 80vh;
  `}
`

export const Header = styled.div`
  background-color: transparent;
  border-radius: 20px;
  height: 50px;
  width: 100%;
  position: absolute;
  top: 0;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const CloseButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;

  background-color: transparent;
  color: #060761;
  cursor: pointer;
  font-size: 38px;
  font-weight: bold;

  height: 50px;
  width: 50px;

  transform: rotate(-45deg);
`

export const TextBox = styled.p`
  color: #333;
  font-family: "Roboto Condensed", "Sans-serif";
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  margin: 40px 20px 20px;
  text-align: justify;

  z-index: 99;

  ${media.lessThan("890px")`
    overflow: scroll;
  `}
`