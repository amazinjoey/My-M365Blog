import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import Contact from "../components/contact/contact"
import SEO from "../components/seo"

const ContactMe = ({data, location}) => {
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="Contact"/>
            <Contact/>
        </Layout>
    )
}

export default ContactMe

export const pageQuery = graphql `
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
