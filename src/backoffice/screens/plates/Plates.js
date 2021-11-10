import { Component } from "react";
import './Plates.css';
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import Card from "../../components/funcComponents/card/Card"
import 'antd/dist/antd.css';
import { get } from 'lodash';
import { LeftOutlined } from '@ant-design/icons'
import properties from "../../../common/utils/properties";
import { withTranslation } from 'react-i18next';
// images
import AddPlate from '../../assets/images/plus.png'

class Plates extends Component {

    constructor(props) {
        super(props)
        this.pageTitle = get(this.props, 'location.state.titlePage', false);
        this.restaurant_category = get(this.props, 'location.state.category_id', false);
        if (!this.pageTitle || !this.restaurant_category) {
            this.props.history.push(properties.BO_ROUTING.MY_MENU)
        }

        this.state = {
            plates: []
        }
    }

    componentDidMount = () => {

        // If plate was deleted, redirect to my menu page
        const elementDeleted = get(this.props, 'location.state.elementDeleted', false);

        if (elementDeleted === true) {
            this.props.history.push(properties.BO_ROUTING.MY_MENU)
        }        

        // Chiamate API dei piatti 
        let allPlates = JSON.parse(localStorage.getItem('localStorageData')).plate_list;

        let categoryPlates = allPlates.filter((plate) => {
            return plate.plate_category_id === this.restaurant_category;
        })

        this.setState({
            plates: categoryPlates
        })
    }

    handleCallbackGoBack = () => {
        this.props.history.goBack()
    }

    handleCallbackGoNewPlate = () => {
        this.props.history.push(properties.BO_ROUTING.NEW_PLATE)
    }

    handleCallbackSinglePlates = (plate_id, plate_name) => () => {
        this.props.history.push(properties.BO_ROUTING.SINGLE_PLATE, {
            plateId: plate_id,
            plateName: plate_name
        })
    }

    render() {
        const { t } = this.props
        return (
            <>
                <LayoutBackOffice
                    pageTitle={t('backoffice.screens.plates.title')}
                >
                    <div className="bo-profile-container">

                        <div className="bo-mymenu-first-row">

                            <div className="bo-mymenu-welcome">
                                <h2>{this.pageTitle}</h2>
                            </div>

                            <div className="bo-mymenu-welcome" onClick={this.handleCallbackGoBack}> <h3><LeftOutlined /></h3> <h3>{t('backoffice.components.back')}</h3> </div>
                        </div>

                        <section className="bo-mymenu-form">
                            <div className="bo-mymenu-flex-cards">
                                <Card
                                    title={t('backoffice.screens.plates.new_plate')}
                                    img={AddPlate}
                                    newCss='new-plate'
                                    callback={this.handleCallbackGoNewPlate}
                                />
                            </div>

                            {
                                this.state.plates.map((plate, index) => {
                                    return (
                                        <div className="bo-mymenu-flex-cards" key={index}>
                                            <Card
                                                title={plate.plate_name}
                                                img={plate.plate_img}
                                                callback={this.handleCallbackSinglePlates(plate.id, plate.plate_name)}
                                            />
                                        </div>
                                    )
                                })
                            }

                        </section>
                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}

export default withTranslation()(Plates);