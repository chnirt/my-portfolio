import React, { useLayoutEffect, useState } from "react"
import { Map, Marker, Popup, TileLayer } from "react-leaflet"
import { Icon } from "leaflet"
import "leaflet/dist/leaflet.css"
import "../css/leaflet.css"

delete Icon.Default.prototype._getIconUrl

Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
})

// const logo = new Icon({
//   iconUrl: require("../images/Logo2.svg"),
//   iconSize: [50, 50],
// })

export default function ContactSection() {
  const [latitude, setLatitude] = useState("10.772362")
  const [longitude, setLongitude] = useState("106.726224")
  const position = [latitude, longitude]

  useLayoutEffect(() => {
    // navigator.geolocation.getCurrentPosition(function (position) {
    //   // console.log("Latitude is :", position.coords.latitude);
    //   // console.log("Longitude is :", position.coords.longitude);
    //   setLatitude(position.coords.latitude)
    //   setLongitude(position.coords.longitude)
    // })
  }, [])

  const MyMap = () => {
    if (typeof window !== "undefined") {
      return (
        <Map center={position} zoom={15}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker
            position={position}
            // icon={logo}
          >
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
          {/* <iframe
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            // style="filter: grayscale(1) contrast(1.2) opacity(0.4);"
          ></iframe> */}
          <MyMap />
        </div>
        <div class="container px-5 py-24 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
            {/* <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p class="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <input
              class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
              placeholder="Email"
              type="email"
            />
            <textarea
              class="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none"
              placeholder="Message"
            ></textarea>
            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <p class="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p> */}
          </div>
        </div>
      </section>
    </>
  )
}
