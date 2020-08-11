import React, { useState } from "react"
import * as S from "./styled"

import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

const data = [
  {
    image: "../../../../xx-samev-10.jpg",
    caption: "abubleble",
    title: "abubleble"
  },
  {
    image: "../../../../xx-samev-5.jpg",
    caption: "bbbbbb",
    title: "abubleble"
  },
  {
    image: "../../../../xx-samev-4.jpg",
    caption: "cacacacaca",
    title: "abubleble"
  },
  {
    image: "../../../../xx-samev-3.jpg",
    caption: "dadim é o carajo",
    title: "abubleble"
  },
  {
    image: "../../../../xx-samev-1.jpg",
    caption: "ummmmmm",
    title: "abubleble"
  },
  {
    image: "../../../../xx-samev-12.jpg",
    caption: "doze",
    title: "abubleble"
  },
  {
    image: "../../../../xx-samev-11.jpg",
    caption: "depois do 10",
    title: "abubleble",
  },
  {
    image: "../../../../xx-samev-13.jpg",
    caption: "A CULPA E DO PT",
    title: "abubleble"
  },
  {
    image: "../../../../xx-samev-14.jpg",
    caption: "QUATORZE",
    title: "abubleble"
  },
  {
    image: "../../../../xx-samev-15.jpg",
    caption: "de piracicaba",
    title: "abubleble"
  },
  {
    image: "../../../../xx-samev-16.jpg",
    caption: "my sweet sixteen",
    title: "abubleble"
  },
  {
    image: "../../../../xx-samev-17.jpg",
    caption: "bolsonaro",
    title: "abubleble"
  },
  {
    image: "../../../../xx-samev-18.jpg",
    caption: "ultima",
    title: "abubleble"
  },
]

const Galeria = () => {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  function handlePhoto(num) {
    setPhotoIndex(num)
    setIsOpen(true)
  }

  return (
    <S.Wrapper>
      <S.GlobalStyles />
      <S.Container>
        {isOpen && (
          <Lightbox
            imageTitle="abubleble"
            imageCaption={data[photoIndex].caption}
            mainSrc={data[photoIndex].image}
            nextSrc={data[(photoIndex + 1) % data.length].image}
            prevSrc={data[(photoIndex + data.length - 1) % data.length].image}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + data.length - 1) % data.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % data.length)
            }
          />
        )}
        <S.Title>Eventos anteriores</S.Title>
        <S.CardsContainer>
          {data.map((el,index) => {
            return (
              <S.Thumb onClick={() => handlePhoto(index)}>
                <S.CardImage path={el.image} />
              </S.Thumb>
            )
          })}
        </S.CardsContainer>
      </S.Container>
    </S.Wrapper>
  )
}

export default Galeria
