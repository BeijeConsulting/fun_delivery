import React from 'react'
import './Navbar.css'
import Logo from '../../../assets/images/logo_beijeRosa.png'


const Navbar = (props) => {
    return (

        <header>
            <div className="bo-navbar">
                <img src={Logo} alt="" />
                <h2>{props.pageTitle.toUpperCase()}</h2>
            </div>
        </header>

    )
}

export default Navbar
