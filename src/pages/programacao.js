import React from "react"
import Layout from "../components/layout"
import dadosComissao from "../data/dadosComissao.json"

import Comissao from "../components/programacao/Comissao"
import Header from "../components/programacao/Header"

const ProgramacaoPage = () => {
  return (
    <Layout>
      <Header />
      <Comissao dados={dadosComissao.comissao} />
    </Layout>
  )
}
export default ProgramacaoPage
