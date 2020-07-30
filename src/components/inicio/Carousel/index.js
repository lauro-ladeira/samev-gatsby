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
  }

  return (
    <S.CarouselWrapper>
      <S.CarouselContainer>
        <S.Title>Palestrantes</S.Title>
        <Slider {...settings}>
          {dados.map(function (dados) {
            return (
              <React.Fragment>
                <Card nome={dados.nome} especialidade={dados.especialidade} palestras={dados.palestras} />
              </React.Fragment>
            )
          })}
        </Slider>
      </S.CarouselContainer>
    </S.CarouselWrapper>
  )
}

export default Carousel