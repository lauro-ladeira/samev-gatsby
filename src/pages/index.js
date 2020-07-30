import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from '../components/inicio/Header'
import Sobre from '../components/inicio/Sobre'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Sobre />
  </Layout>
)

export default IndexPage
