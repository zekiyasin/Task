import React from 'react'
import "./footer.css"

const Footer = () => {
  const data = [
    "@ 2023 Glomil Portal", "Careers", "Trademark", "Privacy", "License"
  ]
  return (
    <section className='footer'>
      {data.map((item) => (<div>{item}</div>))}

    </section>
  )
}

export default Footer