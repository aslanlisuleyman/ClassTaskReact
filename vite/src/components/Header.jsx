import React from 'react'

function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
            <p><b>B R </b></p>
            <p>Architect</p>
        </div>
        <div className='header__right'>
            <button>Project</button>
            <button>About</button>
            <button>Contact</button>
        </div>
        
    </div>
  )
}

export default Header