import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from '../components/inicio/Header'
import Sobre from '../components/inicio/Sobre'
import Carousel from "../components/inicio/Carousel"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Sobre />
    <Carousel />
  </Layout>
)

export default IndexPage
