import React from 'react'
import "./footer.css"

const Footer = () => {
  const data = [
    "@ 2023 Glomil Portal", "Careers", "Trademark", "Privacy", "License"
  ]
  return (
    <section className='footer'>
      {data.map((item) => (<a href='/'>{item}</a>))}

    </section>
  )
}

export default Footer