import React from 'react'
import About from './About'

function Abouts({cards}) {
  return (
    <div className='abouts'>
        {
            cards.map(card=>(
                <About card={card}/>
            ))
        }
    </div>
  )
}

export default Abouts