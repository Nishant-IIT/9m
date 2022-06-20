import React from "react"
import Branding from "../home/Branding"
import About from "../home/about/About"
import Services from "../home/servicess/Services"
import Wrapper from "../home/Wrapper"
import Skill from "../home/Skill"
import WrapperOne from "../home/WrapperOne"
import Blog from "../home/blog/Blog"
import PriceCard from "../home/price/PriceCard"

const HomePages = () => {
  return (
    <>
      <Branding />
      {/* <About /> */}
      {/* <Services /> */}
      <Wrapper />
      {/* <Skill /> */}
      <WrapperOne />
      <Blog />
      <PriceCard />
    </>
  )
}

export default HomePages
