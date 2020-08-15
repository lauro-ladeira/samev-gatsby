import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Logo = () => {
  const { logoImage } = useStaticQuery(
    graphql`
      query {
        logoImage: file(relativePath: { eq: "logo-samev.png" }) {
          childImageSharp {
            fixed (width: 172, height: 52) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `
  )

  return <S.LogoWrapper fixed={logoImage.childImageSharp.fixed} />
}

export default Logo
