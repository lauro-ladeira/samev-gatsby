import React, { useState } from "react"
import * as S from "./styled"
import Gallery from "react-grid-gallery"

const captionStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  maxHeight: "240px",
  overflow: "hidden",
  position: "absolute",
  bottom: "0",
  width: "100%",
  color: "white",
  padding: "2px",
  fontSize: "90%",
}

const customTagStyle = {
  wordWrap: "break-word",
  display: "inline-block",
  backgroundColor: "white",
  height: "auto",
  fontSize: "75%",
  fontWeight: "600",
  lineHeight: "1",
  padding: ".2em .6em .3em",
  borderRadius: ".25em",
  color: "black",
  verticalAlign: "baseline",
  margin: "2px",
}

const Galeria = () => {
  const [images] = useState([
    {
      src: "../../../../XX SAMEV 1.jpg",
      thumbnail: "../../../../XX SAMEV 1.jpg",
      thumbnailWidth: 960,
      thumbnailHeight: 720,
      tags: [{ value: "SAMEV 2018", title: "Nature | Flowers" }],
      caption: "Geral reunido pra apertar a braba",
    },
    {
      src: "../../../../XX SAMEV 3.jpg",
      thumbnail: "../../../../XX SAMEV 3.jpg",
      thumbnailWidth: 960,
      thumbnailHeight: 720,
      tags: [
        { value: "People", title: "People" },
        { value: "Architecture", title: "Architecture | Outdoors" },
        { value: "Industrial", title: "Industrial" },
      ],
      caption: "315H (gratisography.com)",
    },
    {
      src: "../../../../XX SAMEV 4.jpg",
      thumbnail: "../../../../XX SAMEV 4.jpg",
      thumbnailWidth: 960,
      thumbnailHeight: 720,
      caption: "201H (gratisography.com)",
    },
    {
      src: "../../../../XX SAMEV 5.jpg",
      thumbnail: "../../../../XX SAMEV 5.jpg",
      thumbnailWidth: 960,
      thumbnailHeight: 720,
      caption: "Big Ben (Tom Eversley - isorepublic.com)",
    },
    {
      src: "../../../../XX SAMEV 10.jpg",
      thumbnail: "../../../../XX SAMEV 10.jpg",
      thumbnailWidth: 960,
      thumbnailHeight: 720,
      tags: [
        { value: "People", title: "People" },
        { value: "Industrial", title: "Industrial" },
      ],
      caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)",
    },
    {
      src: "../../../../XX SAMEV 11.jpg",
      thumbnail: "../../../../XX SAMEV 11.jpg",
      thumbnailWidth: 960,
      thumbnailHeight: 720,
      caption: "Wood Glass (Tom Eversley - isorepublic.com)",
    },
    {
      src: "../../../../XX SAMEV 12.jpg",
      thumbnail: "../../../../XX SAMEV 12.jpg",
      thumbnailWidth: 960,
      thumbnailHeight: 720,
      tags: [{ value: "Nature", title: "Nature | Flowers" }],
      caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
    },
  ])

  function setCustomTags(i) {
    return i.tags.map(t => {
      return (
        <div key={t.value} style={customTagStyle}>
          {t.title}
        </div>
      )
    })
  }

  const imgs = images.map(i => {
    i.customOverlay = (
      <div style={captionStyle}>
        <div>{i.caption}</div>
        {i.hasOwnProperty("tags") && setCustomTags(i)}
      </div>
    )
    return i
  })

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Sobre a SAMEV</S.Title>
        <div
          style={{
            display: "block",
            minHeight: "1px",
            width: "100%",
            border: "1px solid #ddd",
            overflow: "auto",
          }}
        >
          <Gallery images={imgs} enableImageSelection={false} rowHeight={300}/>
        </div>
      </S.Container>
    </S.Wrapper>
  )
}

export default Galeria
