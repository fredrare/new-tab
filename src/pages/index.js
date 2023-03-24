import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Starter from "../components/starter"
import thumbnail from "../images/thumbnail.webp"
import favicon from "../images/favicon.svg"

const IndexPage = () => (
  <Layout>
    <Starter />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => (
  <Seo
    title="New tab"
    description="Use this page to open an aesthetic new tab and surf the internet."
    author="Fredrare"
    url="https://start.fredrare.com/"
    thumbnail={thumbnail}
    icon={favicon}
  />
)

export default IndexPage
