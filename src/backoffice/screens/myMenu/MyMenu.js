import { Component } from "react";
import './MyMenu.css';
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import Card from "../../components/funcComponents/card/Card"
import 'antd/dist/antd.css';
import properties from "../../../common/utils/properties";
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import genericServices from "../../../common/utils/genericServices";
import { get } from 'lodash'
import AddPlate from '../../assets/images/plus.png'
class MyMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        };
    }

    componentDidMount = async () => {
        // Api per avere tutte le categorie dei piatti
        properties.GENERIC_SERVICE = new genericServices()
        let apiCategories = await properties.GENERIC_SERVICE.apiGET(`platecategories/restaurant/${get(this.props, 'restaurantIdDuck.restaurant_id', null)}`, get(this.props, 'tokenDuck.token', null))
        this.setState({
            categories: apiCategories
        })
    }

    handleCallbackPagePlates = (category_id, category_name) => () => {
        this.props.history.push(properties.BO_ROUTING.PLATES, {
            titlePage: category_name.toUpperCase(),
            category_id: category_id
        })
    }

    handleCallbackGoNewPlate = () => {
        this.props.history.push(properties.BO_ROUTING.NEW_PLATE)
    }

    render() {
        const { t } = this.props
        return (
            <>
                <LayoutBackOffice
                    pageTitle={t('backoffice.screens.my_menu.title')}
                >
                    <div className="bo-profile-container">

                        <div className="bo-mymenu-first-row align-left">
                            <div className="bo-mymenu-welcome">
                                <h2>{t('backoffice.screens.my_menu.title')}</h2>
                            </div>
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
                                this.state.categories !== undefined &&
                                <>
                                    {
                                        this.state.categories.map((category, index) => {
                                            console.log("Immagine: ", category.img)
                                            return (
                                                <div className="bo-mymenu-flex-cards" key={index}>
                                                    <Card
                                                        title={category.name}
                                                        img={category.img}
                                                        callback={this.handleCallbackPagePlates(category.id, category.name)}
                                                    />
                                                </div>
                                            )
                                        })
                                    }
                                </>
                            }

                        </section>
                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}
const mapStateToProps = state => ({
    tokenDuck: state.tokenDuck,
    restaurantIdDuck: state.restaurantIdDuck,
})
export default connect(mapStateToProps)(withTranslation()(MyMenu))