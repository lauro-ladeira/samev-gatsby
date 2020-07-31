import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import * as S from "./styled"
import Card from "./Card"

function Carousel({ dados }) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScrol: 1,
    autoplay: true,
    autoplaySpeed: 4,
    pauseOnHover: false,
  }

  return (
    <S.CarouselWrapper>
      <S.CarouselContainer>
        <S.Title>Palestrantes</S.Title>
        <Slider {...settings}>
          {dados.map(dados => (
            <React.Fragment>
              <Card
                nome={dados.nome}
                especialidade={dados.especialidade}
                palestras={dados.palestras}
                url={dados.url}
              />
            </React.Fragment>
          ))}
        </Slider>
      </S.CarouselContainer>
    </S.CarouselWrapper>
  )
}

export default Carousel
