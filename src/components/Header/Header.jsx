import React from 'react'
import { FaHandshakeAngle } from 'react-icons/fa6'

const Header = () => {
  return (
    <header className='logo-header'>
      <FaHandshakeAngle className='fa-fade' />
      <h1>Evenly<span>.</span></h1>
    </header>
  )
}

export default Header