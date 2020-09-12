import React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/layout'
import Image from 'components/image'
import SEO from 'components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-gray-900">Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div className="w-64 pb-4">
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
)

export default IndexPage
