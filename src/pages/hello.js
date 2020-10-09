import React, { useState } from "react"

import Layout from "../components/layout"

export default function Hello() {
  const [count, setCount] = useState(0)
  return (
    <Layout>
      Hello worldx
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
