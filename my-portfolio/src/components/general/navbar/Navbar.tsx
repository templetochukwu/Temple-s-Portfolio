import React from 'react'
import Logo from './Logo'

export default function Navbar() {
  return (
    <nav className='h-18 fixed z-50 w-full'>
        <div>
            {/* Logo */}
            <Logo />
        </div>
    </nav>
  )
}
