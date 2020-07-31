import styled from "styled-components"
import img1 from "../../../../images/img1.png"
import img2 from "../../../../images/img2.png"
import img3 from "../../../../images/img3.png"
import img4 from "../../../../images/img4.png"
import img5 from "../../../../images/img5.png"

export const CardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  width: 80%;
  height: 260px;
  /* background-image: ${({ url }) => `url(${url})`}; */
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  margin: 20px 5px 10px;

  transition: transform .6s;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`
export const CardImage = styled.div`
  /* background-image: ${({ url }) => `url(${url})`}; */
  background-image: url(${img1});
  /* background-color: cyan; */
  background-size: 70px;
  border-radius: 50%;
  height: 70px;
  margin: 20px auto;
  width: 70px;  
`

export const CardNome = styled.h1`
  font-family: "Roboto Condensed", "sans-serif";
  font-size: 18px;
  font-weight: bold;
  color: #060761;
  margin-bottom: 10px;
`
export const CardEspecialidade = styled.h2`
  font-family: "Roboto Condensed", "sans-serif";
  font-size: 16px;
  color: #222;
  margin-bottom: 10px;
`
export const CardPalestras = styled.p`
  font-family: "Roboto Condensed", "sans-serif";
  font-size: 14px;
  font-style: italic;
  text-align: center;
  color: #222;
  margin-top: 10px;
`
