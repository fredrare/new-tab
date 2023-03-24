import * as React from "react"

function Seo({ description, title, author, url, thumbnail, icon, children }) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={thumbnail} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta name="twitter:card" property="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        property="twitter:creator"
        content={author}
      />
      <meta name="twitter:title" property="twitter:title" content={title} />
      <meta
        name="twitter:description"
        property="twitter:description"
        content={description}
      />
      <meta propnameerty="twitter:url" property="twitter:url" content={url} />
      <meta property="twitter:image" name="twitter:image" content={thumbnail} />
      <link rel="icon" href={icon} />
      {children}
    </>
  )
}

export default Seo
