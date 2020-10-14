import React, { useEffect, useState } from "react"

import "../css/index.css"
import Navbar from "./navbar"
import HeroSection from "./hero-section"
import FeatureSection from "./feature-section"
import StatisticSection from "./statistic-section"
import TestimonialsSection from "./testimonials-section"
import ContactSection from "./contact-section"
import CallToActionSection from "./call-to-action-section"
import Footer from "./footer"
import TeamSection from "./team-section"

const IndexPage = () => {
  const [prevScrollPOS, setPrevScrollPOS] = useState(window.pageYOffset)

  const handleScroll = () => {
    var currentScrollPOS = window.pageYOffset
    if (prevScrollPOS > currentScrollPOS) {
      document.getElementById("navbar").style.top = "0"
    } else {
      document.getElementById("navbar").style.top = "-100px"
    }
    setPrevScrollPOS(currentScrollPOS)
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScroll(prevScrollPOS)
    })
  })

  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <StatisticSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
      <CallToActionSection />
      <Footer />
    </>
  )
}

export default IndexPage
