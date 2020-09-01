import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import * as S from "./styled"
import * as Sc from "./card/styled"

const Palestrantes = () => {
  const [active, setActive] = useState(false)
  const [palestranteActive, setPalestranteActive] = useState({})

  const escFunction = event => {
    if (event.keyCode === 27) {
      setActive(false)
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", escFunction, false)

    return () => {
      window.removeEventListener("keydown", escFunction, false)
    }
  }, [])

  const toggleClassName = p => {
    const currentState = active
    setActive(!currentState)
    setPalestranteActive(p)
  }

  const data = useStaticQuery(graphql`
    query {
      allPalestrantesJson {
        nodes {
          nome
          especialidade
          palestras {
            tema
          }
          src {
            childImageSharp {
              fluid(maxWidth: 800) {
                src
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScrol: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1125,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 914,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 685,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <S.CarouselWrapper>
      <S.CarouselContainer>
        <S.Title>Palestrantes</S.Title>
        <Sc.Box active={active ? "activeBox" : null}>
          <Sc.Header>
            <Sc.CloseButton
              onClick={toggleClassName}
              active={active ? "activeClose" : null}
            >
              +
            </Sc.CloseButton>
          </Sc.Header>
          <Sc.Info>
            <Sc.CardImage active={active ? "activeAvatar" : null}>
              {data.allPalestrantesJson.nodes.map(palestrante => {
                if (palestrante.nome === palestranteActive.nome) {
                  return (
                    <Sc.SetImg key={Math.random()}
                      fluid={palestranteActive.src.childImageSharp.fluid}
                    />
                  )
                }
                return null
              })}
            </Sc.CardImage>
            <Sc.CardNome active={active ? "activeName" : null}>
              {palestranteActive.nome}
            </Sc.CardNome>
          </Sc.Info>
          <Sc.TextBox>vai rolar</Sc.TextBox>
        </Sc.Box>
        <Slider {...settings}>
          {data.allPalestrantesJson.nodes.map(palestrante => (
            <React.Fragment key={Math.random()}>
              <Sc.CardContainer
                onClick={() => toggleClassName(palestrante)}
                active={active ? "activeClose" : null}
              >
                <Sc.CardImage>
                  <Sc.SetImg fluid={palestrante.src.childImageSharp.fluid} />
                </Sc.CardImage>
                <Sc.CardNome>{palestrante.nome}</Sc.CardNome>
                <Sc.CardEspecialidade>
                  {palestrante.especialidade}
                </Sc.CardEspecialidade>
                {palestrante.palestras.map(palestras => (
                  <Sc.CardPalestras key={Math.random()}>
                    {palestras.tema}
                  </Sc.CardPalestras>
                ))}
                ;
              </Sc.CardContainer>
            </React.Fragment>
          ))}
        </Slider>
      </S.CarouselContainer>
    </S.CarouselWrapper>
  )
}

export default Palestrantes
