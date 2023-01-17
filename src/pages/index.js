import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import LinkButton from "../components/LinkButton";

const IndexPage = () => (
  <Layout>

      {/* Art of the cover image, in the main page. */}
      <StaticImage
          src="../images/wallpaper-art.jpeg"
          layout="constrained"
          loading="wallpaper-art"
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="wallpaper-art"
          className={'h-[45vh] w-screen'}
      />

      {/* Welcome message */}
      <div className="flex flex-col space-y-5 text-center m-6 p-4">
            <h1 className="text-2xl font-bold font-sans">Welcome to the tribe</h1>
            <p className="text-gray-600 text-center font-medium">Hey there! Welcome to my personal website, where I'm all about solving problems and getting creative. Whether you're looking to improve your coding skills, read some poetry, or check out some cool photography.</p>
            <p className="text-gray-600 text-center font-medium">I hope you'll enjoy it.</p>
            <LinkButton text="Explore" link="./" />
      </div>

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
