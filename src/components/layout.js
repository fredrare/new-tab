/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const Layout = ({ children }) => {
  const background = (
    <StaticImage
      className="absolute inset-0 -z-50"
      src="../images/macindows.png"
      loading="eager"
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="background"
    />
  )

  return (
    <div className="flex flex-col w-full min-h-screen items-center text-stone-800 relative">
      {background}
      <main className="grow flex items-center justify-center">{children}</main>
      <footer className="w-full p-2 flex justify-center gap-1">
        Built by
        <a
          href="http://fredrare.com/"
          rel="noreferrer"
          target="_blank"
          className="underline"
        >
          Fredrare
        </a>
        - Inspired by
        <a
          href="http://www.zamax.design/"
          rel="noreferrer"
          target="_blank"
          className="underline"
        >
          Zamax
        </a>
      </footer>
    </div>
  )
}

export default Layout
