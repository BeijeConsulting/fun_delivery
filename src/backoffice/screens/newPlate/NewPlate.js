import { Component } from "react";
import './NewPlate.css';
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import Card from "../../components/funcComponents/card/Card"
import 'antd/dist/antd.css';
import { get } from 'lodash';
import { LeftOutlined } from '@ant-design/icons'
import SinglePlateCard from '../../components/funcComponents/singlePlateCard/SinglePlateCard'
import upload_white from '../../assets/images/upload_white.png'
class NewPlate extends Component {
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
                    pageTitle='Nuovo Piatto'
                >
                    <div className="bo-profile-container">
                        <div className="bo-profile-form">
                            <div className="bo-mymenu-first-row">

                                <div className="bo-mymenu-welcome">
                                    <h2>Crea il tuo piatto</h2>
                                </div>

                                <div className="bo-mymenu-welcome" onClick={this.handleCallbackGoBack}> <h3><LeftOutlined /></h3> <h3>indietro</h3> </div>
                            </div>
                            <SinglePlateCard
                                img={upload_white}
                                newCss='new-plate'
                                Categories={this.categories}
                            />
                        </div>
                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}

export default NewPlate