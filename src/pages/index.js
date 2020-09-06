import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Comp from "../components/comp"

const IndexPage = () => (
  <Layout>
  <Comp compx="asad" />
    <SEO title="Home" />
    <h1>Hi bitch</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <button class="primary-button">Click me</button>

    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
