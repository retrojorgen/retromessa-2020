/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

import SponsorRow from "../components/sponsor"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          logoTitle
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.logoTitle} />
      <div>
        <main>{children}</main>
        <Footer siteTitle={data.site.siteMetadata.logoTitle} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
