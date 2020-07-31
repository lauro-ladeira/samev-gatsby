import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import * as S from "./styled"
import Card from "./Card"

function Carousel({ dados }) {
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
        <Slider {...settings}>
          {dados.map((dados, i) => (
            <React.Fragment key={i}>
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
