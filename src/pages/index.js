import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/index.css"

const IndexPage = () => {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <br />
      {count}
      <br />
      <button
        class="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
        onClick={() => setCount(prevState => ++prevState)}
      >
        +
      </button>
    </Layout>
  )
}

export default IndexPage
