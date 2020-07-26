import React from "react"
import PropTypes from "prop-types"

import { LayoutMain } from './styled'

const Layout = ({ children }) => {
  return <LayoutMain>{children}</LayoutMain>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
