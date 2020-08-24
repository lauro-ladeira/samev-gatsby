import React from "react"
import Layout from "../components/layout"

import Header from "../components/inscricao/Header"
import InscricaoEvento from "../components/inscricao/InscricaoEvento"

const InscricaoPage = () => {
  return (
    <Layout>
      <Header />
      <InscricaoEvento />
    </Layout>
  )
}
export default InscricaoPage