import React from "react"

export default function MyMap(props) {
  const { options } = props

  if (typeof window !== "undefined") {
    return <Map {...options}>{/* Map code goes here */}</Map>
  }
  return null
}
