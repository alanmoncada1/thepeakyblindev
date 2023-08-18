/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
import DataBlogApi from "./src/DataBlogApi/DataBlogApi"
import { UnsplashResponse } from "./src/model/Types"

// /**
//  * @type {import('gatsby').GatsbyNode['createPages']}
//  */
// exports.createPages = async ({ gatsbyApi }) => {
//   const { createPage, reporter } = gatsbyApi.actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })

//   reporter.info(`Create pages from template...`)
// }

exports.sourceNodes = async (gatsbyApi) => {
  const { reporter } = gatsbyApi

  const { createNode } = gatsbyApi.actions;
  const response = await DataBlogApi.getCoverImage();

  const coverImage = response.data;
  
  reporter.info(`Response data from getCoverImage in DatablogApi...`)

  const node = {
    id: gatsbyApi.createNodeId(`UnsplashImage-${coverImage.id}`),
    internal: {
      type: "UnsplashImage",
      contentDigest: gatsbyApi.createContentDigest(coverImage),
    },
    ...coverImage,
  } satisfies UnsplashResponse;

  createNode(node);

  reporter.info(`Example plugin sourceNodes...`)
}