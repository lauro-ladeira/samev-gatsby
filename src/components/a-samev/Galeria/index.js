import React, { useState, useCallback } from "react"
import Carousel, { Modal, ModalGateway } from "react-images"
import Gallery from "react-photo-gallery"
import * as S from "./styled"

const photos = [
  {
    src: "../../../../XX SAMEV 1.jpg",
    width: 96,
    height: 72,
  },
  {
    src: "xx-samev-2.jpg",
    width: 72,
    height: 96,
  },
  {
    src: "XX SAMEV 4.jpg",
    width: 72,
    height: 96,
  },
  {
    src: "XX SAMEV 5.jpg",
    width: 72,
    height: 96,
  },
  {
    src: "XX SAMEV 10.jpg",
    width: 96,
    height: 72,
  },
  {
    src: "XX SAMEV 11.jpg",
    width: 72,
    height: 96,
  },
  {
    src: "XX SAMEV 12.jpg",
    width: 72,
    height: 96,
  },
  {
    src: "XX SAMEV 13.jpg",
    width: 72,
    height: 96,
  },
  {
    src: "XX SAMEV 14.jpg",
    width: 96,
    height: 72,
  },
  {
    src: "XX SAMEV 15.jpg",
    width: 72,
    height: 96,
  },
  {
    src: "XX SAMEV 16.jpg",
    width: 72,
    height: 96,
  },
  {
    src: "XX SAMEV 17.jpg",
    width: 72,
    height: 96,
  },
  {
    src: "XX SAMEV 18.jpg",
    width: 72,
    height: 96,
  },
]

const Galeria = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Sobre a SAMEV</S.Title>
        <div>
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </S.Container>
    </S.Wrapper>
  )
}

export default Galeria
