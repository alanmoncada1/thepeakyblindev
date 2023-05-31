import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <h1 className="">Title</h1>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" description={undefined} children={undefined} />

export default NotFoundPage
