import React from 'react'
import './Logo.css'

const Logo = (props) => {
    return (
        <div className="navbar__logo">
            {props.name}
        </div>
    )
}

export default Logo