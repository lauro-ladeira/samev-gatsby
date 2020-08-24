import React from "react"
import Layout from "../components/layout"

import Header from "../components/a-samev/Header"
import InscricaoEvento from "../components/inscricao/InscricaoEvento"

const InscricaoPage = () => {
  return (
    <Layout>
      <Header title="Inscrição" />
      <InscricaoEvento />
    </Layout>
  )
}
export default InscricaoPage