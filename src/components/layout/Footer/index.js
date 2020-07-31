import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"

import * as S from "./styled"
import Logo from "../Logo"

const Footer = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Contato>
          <S.Title>Contato</S.Title>
          <S.Text>Email: samev@gmail.com</S.Text>
          <S.Text>Whatsapp: (31) 91234-5678</S.Text>
        </S.Contato>
        <S.Social>
          <S.Icons>
            <S.socialMediaContainer>
              <S.socialMediaLink href="https://www.facebook.com" target="_blank">
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </S.socialMediaLink>
            </S.socialMediaContainer>
            <S.socialMediaContainer>
              <S.socialMediaLink href="https://www.youtube.com/watch?v=y_HY1jZlUP0" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </S.socialMediaLink>
            </S.socialMediaContainer>
          </S.Icons>
          <S.LogoContainer>
            <Logo />
          </S.LogoContainer>
        </S.Social>
      </S.Container>
    </S.Wrapper>
  )
}

export default Footer
