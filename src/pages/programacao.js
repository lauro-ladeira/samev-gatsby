import React from "react"
import Layout from "../components/layout"

import Header from "../components/programacao/Header"
import ProgramacaoEvento from "../components/programacao/ProgramacaoEvento"

const ProgramacaoPage = () => {
  return (
    <Layout>
      <Header />
      <ProgramacaoEvento />
    </Layout>
  )
}
export default ProgramacaoPage
