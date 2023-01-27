import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import LinkButton from "../components/LinkButton";
import SectionList from "../components/SectionList";

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
      <div className="flex flex-col space-y-3 text-center m-6 mt-2 p-4 text-gray-800">
            <h1 className="text-2xl font-bold">Welcome to the tribe</h1>
            <p className="font-medium leading-loose">Hey, Welcome to my personal website! here I'm all about solving problems and getting creative. Whether you're looking to improve your coding skills, read some poetry, or check out some cool photography.</p>
            <p className="font-medium leading-loose">I hope you'll enjoy it.</p>
            <LinkButton text="Explore" link="#" />
      </div>
      {/* Main Sections */}
      <SectionList sections={null}/>

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" description={undefined} children={undefined} />

export default IndexPage
