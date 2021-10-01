import { Component } from "react";
import './MyMenu.css';
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import Card from "../../components/funcComponents/card/Card"
import 'antd/dist/antd.css';
// images
import LogoBeije from '../../assets/images/logo_beijeRosa.png';
import Primi from '../../assets/images/primi.png'
import Secondi from '../../assets/images/secondi.jfif'
import Contorni from '../../assets/images/contorni.jpg'
import Dessert from '../../assets/images/dessert.png'
import Panini from '../../assets/images/hamburger.jpg'
import Pizze from '../../assets/images/pizza2.png'
import Piedine from '../../assets/images/messicano.jpg'
import Poke from '../../assets/images/poke.jpg'
import Sushi from '../../assets/images/sushi.png'
import Altro from '../../assets/images/altro.jpg'
class MyMenu extends Component {
    constructor(props) {
        super(props)
    }
    handleCallbackPagePlates = () => {
        this.props.history.push('/restaurant/plates',{
            titlePage: 'PRIMI'
        })
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
                                    title='Primi'
                                    img={Primi}
                                    callback={this.handleCallbackPagePlates}
                                />
                            </div>
                            <div className="bo-mymenu-flex-cards">
                                <Card
                                    title='Secondi'
                                    img={Secondi}
                                />
                            </div>
                            <div className="bo-mymenu-flex-cards">
                                <Card
                                    title='Contorni'
                                    img={Contorni}
                                />
                            </div>
                            <div className="bo-mymenu-flex-cards">
                                <Card
                                    title='Dessert'
                                    img={Dessert}
                                />
                            </div>
                            <div className="bo-mymenu-flex-cards">
                                <Card
                                    title='Panini'
                                    img={Panini}
                                />
                            </div>
                            <div className="bo-mymenu-flex-cards">
                                <Card
                                    title='Pizze'
                                    img={Pizze}
                                />
                            </div>
                            <div className="bo-mymenu-flex-cards">
                                <Card
                                    title='Messicano'
                                    img={Piedine}
                                />

                            </div>
                            <div className="bo-mymenu-flex-cards">
                                <Card
                                    title='Poke'
                                    img={Poke}
                                />
                            </div>
                            <div className="bo-mymenu-flex-cards">
                                <Card
                                    title='Sushi'
                                    img={Sushi}
                                />
                            </div>
                            <div className="bo-mymenu-flex-cards">
                                <Card
                                    title='Altro'
                                    img={Altro}
                                />
                            </div>
                        </div>
                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}

export default MyMenu;