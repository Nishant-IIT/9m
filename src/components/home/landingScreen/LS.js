import React from "react"
import "./Ls.css"
import "./hero"
const Heading = ({ subtitle, title }) => {
  return (
    <>
      <div id='heading'>
      <section className='back'/>
      <div className='margin'></div>
        <h3>{subtitle} </h3>
        <h1>{title} </h1>
      </div>
    </>
  )
}

export default Heading
