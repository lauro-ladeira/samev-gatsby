import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from '../components/a-samev/Header'
import Sobre from '../components/a-samev/Sobre'
import Galeria from '../components/a-samev/Galeria'
// import { Gallery } from "gatsby-theme-gallery";

const AsamevPage = () => (
  <Layout>
    <SEO title="A SAMEV" />
    <Header />
    <Sobre />
    <Galeria />
  </Layout>
)

export default AsamevPage
