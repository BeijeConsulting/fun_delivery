import { Component } from "react";
import './MyMenu.css';
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import Card from "../../components/funcComponents/card/Card"
import 'antd/dist/antd.css';
import { get } from "lodash";

// images
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
        super(props);

       // this.categories = JSON.parse(localStorage.getItem('localStorageData')).plate_categories;

        this.state = {
            categories: []
        };
    }

    componentDidMount = () => {
        // Simulating api call on localStorage
        this.setState({
            categories: JSON.parse(localStorage.getItem('localStorageData')).plate_categories
        }) 
    }


    handleCallbackPagePlates = (category_id, category_name) => () => {
        this.props.history.push('/restaurant/plates', {
            titlePage: category_name.toUpperCase(),
            category_id: category_id
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

                            {
                                this.state.categories.map((category, index) => {
                                    return (
                                        <div className="bo-mymenu-flex-cards" key={index}>
                                            <Card
                                                title={category.name}
                                                img={category.img_path}
                                                callback={this.handleCallbackPagePlates(category.id, category.name)}
                                            />
                                        </div>
                                    )
                                }) 
                            }

                        </div>
                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}

export default MyMenu;