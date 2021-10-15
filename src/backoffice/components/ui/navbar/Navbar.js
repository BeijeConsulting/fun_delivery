import React from 'react'
import './Navbar.css'
import Logo from '../../../assets/images/logo_bianco.svg'
import {useHistory} from 'react-router-dom'

const Navbar = (props) => {
    const history = useHistory()
    const returnLandingPage = ()=>{
        history.push('/')
    }
    return (

        <header>
            <div className="bo-navbar">
                <img onClick = {returnLandingPage} src={Logo} alt="" style={{cursor:'pointer'}}/>
                <h2>{props.pageTitle.toUpperCase()}</h2>
            </div>
        </header>

    )
}

export default Navbar
