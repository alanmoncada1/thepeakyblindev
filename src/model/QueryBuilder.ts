// export const query = graphql`
//   query($id: String) {
//     mdx(id: {eq: $id}) {
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         hero_image_alt
//         hero_image_credit_link
//         hero_image_credit_text
//         hero_image {
//           childImageSharp {
//             gatsbyImageData
//           }
//         }
//       }
//     }
//   }
// `