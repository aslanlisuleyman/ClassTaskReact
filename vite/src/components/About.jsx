import React from 'react'

function About({card}) {
  return (
    <div className='about'>
      <img src={card.imageLink} alt="" />
      <p>{card.title} </p>
      <p>{card.content} </p>
      <p>{card.label} </p>
      <button className='btn'>Contact</button>

    </div>
  )
}

export default About