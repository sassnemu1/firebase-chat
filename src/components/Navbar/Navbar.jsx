import React from 'react'
import './Navbar.css'

import SignOut from '../SignOut/SignOut'
import Logo from './Logo/Logo'

const logoName = 'Wassap Homie'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Logo name={logoName}/>
            <SignOut />
        </nav>
    )
}

export default Navbar