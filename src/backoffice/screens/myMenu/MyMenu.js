import { Component } from "react";
import './MyMenu.css';
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import Card from "../../components/funcComponents/card/Card"
import 'antd/dist/antd.css';
import properties from "../../../common/utils/properties";
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
class MyMenu extends Component {
    constructor(props) {
        super(props);
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
        this.props.history.push(properties.BO_ROUTING.PLATES, {
            titlePage: category_name.toUpperCase(),
            category_id: category_id
        })
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

                        </section>
                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}
const mapStateToProps = state =>({
    tokenDuck: state.tokenDuck
})
export default connect(mapStateToProps)(withTranslation()(MyMenu))