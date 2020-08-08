import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from '../components/a-samev/Header'
import Sobre from '../components/a-samev/Sobre'

const AsamevPage = () => (
  <Layout>
    <SEO title="A SAMEV" />
    <Header />
    <Sobre />
  </Layout>
)

export default AsamevPage
