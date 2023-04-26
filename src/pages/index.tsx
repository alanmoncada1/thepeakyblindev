import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import LinkButton from "../components/LinkButton";
import SectionList from "../components/SectionList";
import TransitionMessageEffect from "../components/TransitionMessageEffect/TransitionMessageEffect";

const IndexPage = () => (
  <Layout>

      {/* Art of the cover image, in the main page. */}
      <StaticImage
          className={'h-[40vh] w-full'}
          src="../images/wallpaper-art.jpeg"
          layout="constrained"
          loading="wallpaper-art"
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="wallpaper-art"
      />

      {/* Welcome message */}
      <div className="flex flex-col space-y-3 items-center text-center m-6 mt-2 p-4 text-gray-800
                       lg:pr-96 lg:pl-96 lg:space-y-5">

            {/*Welcome message effect*/}
            <Link to={'#'}>
                  <TransitionMessageEffect
                      className="text-2xl text-gray-600 font-bold cursor-pointer
                        lg:text-4xl
                        hover:text-indigo-400 font-sans" />
            </Link>

            <h1 className="text-gray-700 text-2xl font-bold lg:text-4xl font-sans">The Peakyblindevs</h1>
            <p className="text-gray-600 font-medium leading-loose lg:text-xl font-serif">Hey, Welcome to my personal website! here I'm all about solving problems and getting creative. Whether you're looking to improve your coding skills, read some poetry, or check out some cool photography.</p>
            <p className="text-gray-600 font-bold leading-loose lg:text-2xl font-sans">I hope you'll enjoy it.</p>

            <LinkButton className="w-11/12 lg:w-40" text="Explore" link="explore" />
      </div>

      {/* Main Sections */}
      <SectionList section={null}/>

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" description={undefined} children={undefined} />

export default IndexPage
