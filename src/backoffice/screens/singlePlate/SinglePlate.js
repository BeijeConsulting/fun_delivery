import { Component } from "react";
import './SinglePlate.css';
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
//import Card from "../../components/funcComponents/card/Card"
import 'antd/dist/antd.css';
//import { get } from 'lodash';
import { LeftOutlined } from '@ant-design/icons'
import SinglePlateCard from '../../components/funcComponents/singlePlateCard/SinglePlateCard'
import Piatto1 from '../../assets/images/piatto1.jpg'
class SinglePlate extends Component {
    constructor(props) {
        super(props)
        this.categories = [
            'Categoria',
            'Pizza',
            'Pokè',
            'Sushi',
            'Messicano',
            'Italiano',
            'Hamburger',
            'Altro'
        ]
    }

    handleCallbackGoBack = () => {
        this.props.history.goBack()
    }

    render() {
        return (
            <>
                <LayoutBackOffice
                    pageTitle='Piatto'
                >
                    <div className="bo-profile-container">
                        <div className="bo-profile-form">
                            <div className="bo-mymenu-first-row">

                                <div className="bo-mymenu-welcome">
                                    <h2>Nome Piatto</h2>
                                </div>

                                <div className="bo-mymenu-welcome" onClick={this.handleCallbackGoBack}> <h3><LeftOutlined /></h3> <h3>indietro</h3> </div>
                            </div>
                            <SinglePlateCard
                                img={Piatto1}
                                Categories={this.categories}
                            />
                        </div>
                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}

export default SinglePlate