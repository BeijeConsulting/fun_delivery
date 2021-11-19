import { Component } from "react";
import './Plates.css';
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import Card from "../../components/funcComponents/card/Card"
import 'antd/dist/antd.css';
import { get } from 'lodash';
import { LeftOutlined } from '@ant-design/icons'
import properties from "../../../common/utils/properties";
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import genericServices from "../../../common/utils/genericServices";
// images
import AOS from 'aos';
import 'aos/dist/aos.css';

class Plates extends Component {

    constructor(props) {
        super(props)
        this.pageTitle = get(this.props, 'location.state.titlePage', false);
        this.plate_category = get(this.props, 'location.state.category_id', false);
        if (!this.pageTitle || !this.plate_category) {
            this.props.history.push(properties.BO_ROUTING.MY_MENU)
        }

        this.state = {
            plates: []
        }
    }

    componentDidMount = async () => {
        AOS.init({ duration: 1000 })
        // If plate was deleted, redirect to my menu page
        const elementDeleted = get(this.props, 'location.state.elementDeleted', false);

       if (elementDeleted === true) {
            this.props.history.push(properties.BO_ROUTING.MY_MENU)
        } 

        // Api per visualizzare tutti i piatti di quella categoria
        properties.GENERIC_SERVICE = new genericServices()
        let categoryPlates = await properties.GENERIC_SERVICE.apiGET(`plates/restaurant/${get(this.props, 'restaurantIdDuck.restaurant_id', null)}/${this.plate_category}`,
            get(this.props, 'tokenDuck.token', null))
            console.log('categoryPlates',categoryPlates)
        this.setState({
            plates: categoryPlates
        })
    }

    handleCallbackGoBack = () => {
        this.props.history.goBack()
    }

    handleCallbackSinglePlates = (plate_id, plate_name,plate_category_id) => () => {
        this.props.history.push(properties.BO_ROUTING.SINGLE_PLATE, {
            plateId: plate_id,
            plateCategoryId: plate_category_id,
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
                                <h2 data-aos="fade-left">{this.pageTitle}</h2>
                            </div>

                            <div className="bo-mymenu-welcome" onClick={this.handleCallbackGoBack}> <h3><LeftOutlined /></h3> <h3>{t('backoffice.components.back')}</h3> </div>
                        </div>

                        <section className="bo-mymenu-form">
                           
                            {
                                this.state.plates !== undefined &&
                                <>
                                    {
                                        this.state.plates.map((plate, index) => {
                                            return (
                                                <div className="bo-mymenu-flex-cards" key={index}>
                                                    <Card
                                                        title={plate.name}
                                                        img={plate.img}
                                                        callback={this.handleCallbackSinglePlates(plate.id, plate.name, plate.categoryId)}
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
export default connect(mapStateToProps)(withTranslation()(Plates));