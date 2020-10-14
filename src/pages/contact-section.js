import React, { useLayoutEffect } from "react"
import { Map, Marker, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "../css/leaflet.css"

export default function ContactSection() {
  const position = ["10.772362", "106.726224"]

  useLayoutEffect(() => {}, [])

  const MyMap = () => {
    if (typeof window !== "undefined") {
      return (
        <Map center={position} zoom={15}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              Welcome to <br />
              my geolocation.
            </Popup>
          </Marker>
        </Map>
      )
    }
    return null
  }

  return (
    <>
      <section class="text-gray-700 body-font relative">
        <div class="absolute inset-0 bg-gray-300">
          <MyMap />
        </div>
        <div class="container px-5 py-24 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10"></div>
        </div>
      </section>
    </>
  )
}
