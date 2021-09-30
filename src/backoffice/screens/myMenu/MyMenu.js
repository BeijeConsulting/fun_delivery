import { Component } from "react";
import './MyMenu.css';
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import Card from "../../components/funcComponents/card/Card"
import 'antd/dist/antd.css';
// images
import LogoBeije from '../../assets/images/logo_beijeRosa.png';
import Primi from '../../assets/images/italiano.jpg'
class MyMenu extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <LayoutBackOffice
                    pageTitle="MY MENU"
                >
                    <div className="bo-profile-container">

                        <div className="bo-mymenu-first-row">

                            <div className="bo-mymenu-welcome">
                                <h2>Il tuo menù</h2>
                            </div>
                        </div>

                        <div className="bo-mymenu-form">

                            <div className="bo-mymenu-flex-cards">
                                <Card
                                    title='Categoria 1'
                                    img={Primi}
                                />
                            </div>
                            <div className="bo-mymenu-flex-cards">
                                <Card
                                    title='Categoria 2'
                                />
                            </div>
                            <div className="bo-mymenu-flex-cards">
                                <Card
                                    title='Categoria 3'
                                />
                            </div>
                            <div className="bo-mymenu-flex-cards">
                                <Card
                                    title='Categoria 4' />
                            </div>
                            <div className="bo-mymenu-flex-cards">
                                <Card
                                    title='Categoria 5'
                                />
                            </div>
                            <div className="bo-mymenu-flex-cards">
                                <Card
                                    title='Categoria 6' />
                            </div>
                            <div className="bo-mymenu-flex-cards">
                                <Card
                                    title='Categoria 7' />
                            </div>
                        </div>
                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}

export default MyMenu