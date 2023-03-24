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
    <div className="absolute inset-0 -z-50">
      <StaticImage
        className="w-full h-full object-cover"
        src="../images/macindows.webp"
        loading="lazy"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="background"
        placeholder="blurred"
      />
    </div>
  )

  return (
    <div className="flex flex-col w-full min-h-screen items-center text-stone-800 relative">
      {background}
      <main className="grow flex items-center justify-center">{children}</main>
      <footer className="w-full p-2 flex justify-center gap-1">
        Built by
        <a
          href="https://fredrare.com/"
          rel="noreferrer"
          target="_blank"
          className="hover:underline focus-visible:underline"
        >
          Fredrare
        </a>
        - Inspired by
        <a
          href="http://www.zamax.design/"
          rel="noreferrer"
          target="_blank"
          className="hover:underline focus-visible:underline"
        >
          Zamax
        </a>
      </footer>
    </div>
  )
}

export default Layout
