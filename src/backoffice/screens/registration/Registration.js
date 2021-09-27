import React, { Component } from 'react'
import Navbar from '../../components/ui/navbar/Navbar'
import InputBox from '../../../common/components/ui/inputBox/InputBox'
import Button from '../../../common/components/ui/button/Button'
import BannerBackground from '../../components/ui/bannerBackground/BannerBackground'

export class Registration extends Component {
    render() {
        return (
            <div>
                <Navbar 
                pageTitle='SING UP'
                />
                <BannerBackground />

                

                
            </div>
        )
    }
}

export default Registration
