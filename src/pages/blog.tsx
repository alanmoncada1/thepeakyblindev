import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby";

const BlogPage = ({ data, serverData }) => {
    // const { image } = serverData
    // const { site } = data
    // Follow this video: https://www.youtube.com/watch?v=qvawKezSR8I&t=613s
    console.log(serverData);

    return (
        <Layout>
            {/* <GatsbyImage alt="" image={} /> */}
        </Layout>
        )
}

export const pageQuery = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
 `



export default BlogPage;