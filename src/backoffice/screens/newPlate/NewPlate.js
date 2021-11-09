import { Component } from "react";
import { withTranslation } from "react-i18next";
import { LeftOutlined, SaveOutlined } from '@ant-design/icons'
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import InputBox from "../../../common/components/ui/inputBox/InputBox";
import TextArea from "../../../common/components/ui/textarea/TextArea";
import SinglePlateCard from '../../components/funcComponents/singlePlateCard/SinglePlateCard';
import upload_white from '../../assets/images/upload_white.png';
import SwitchProfile from '../../components/ui/switch/SwitchProfile';

import 'antd/dist/antd.css';
import './NewPlate.css';

// Default Image for new plates
import defaultImage from '../../assets/images/altro.jpg';
import properties from "../../../common/utils/properties";

class NewPlate extends Component {
    constructor(props) {
        super(props)
        this.new_plate = {
            plate_img: '',
            plate_name: '',
            plate_description: '',
            plate_price: null,
            plate_category_id: null,
            plate_visibility: true,
        }
        this.state = {
            warning: {
                plate_img: false,
                plate_name: false,
                plate_price: false,
                plate_category_id: false,
                plate_description: false,
            },
            list_categories: [],
        }
    }

    componentDidMount = () => {
        // Simulating api call on localStorage
        this.setState({
            list_categories: JSON.parse(localStorage.getItem('localStorageData')).plate_categories
        })

    }

    handleCallbackGoBack = () => {
        this.props.history.goBack()
    }

    handleCallbackInput = (e) => {
        if (e.target.name === 'plate_category_id') {
            this.new_plate[e.target.name] = parseInt(e.target.value);
        } else {
            this.new_plate[e.target.name] = e.target.value
        }
    }

    handleSwitchCallback = (e) => {
        this.new_plate.plate_visibility = e
    }

    handleCallBackFocus = (e) => {
        this.setState({
            warning: {
                ...this.state.warning,
                [e.target.name]: false
            }
        })
    }

    handleSubmit = () => {

        this.setState(

            () => ({
                warning: {
                    plate_name: this.new_plate.plate_name.length < 4,
                    plate_price: isNaN(parseFloat(this.new_plate.plate_price)),
                    plate_category_id: !this.new_plate.plate_category_id,
                    plate_description: this.new_plate.plate_description.length < 4,
                }
            }),

            () => {
                let savingReady = true;

                for (let key in this.state.warning) {
                    if (this.state.warning[key] === true) {
                        savingReady = false
                        return savingReady
                    }
                }

                if (savingReady === true) {
                    let localStorageData = JSON.parse(localStorage.getItem('localStorageData'));

                    localStorageData.plate_list.push({
                        ...this.new_plate,
                        id: localStorageData.plate_list.length + 1,
                        plate_img: defaultImage
                    });

                    localStorage.setItem('localStorageData', JSON.stringify(localStorageData));

                    // Find category name
                    let categoryName = this.state.list_categories.find((category, index) => {
                        return category.id === this.new_plate.plate_category_id;
                    }).name;

                    this.props.history.push(properties.BO_ROUTING.PLATES, {
                        category_id: parseInt(this.new_plate.plate_category_id),
                        titlePage: categoryName.toUpperCase()
                    })
                }

            }
        )
    }

    render() {
        const { t } = this.props
        return (
            <LayoutBackOffice
                pageTitle={t('backoffice.screens.new_plate.title')}
            >
                <div className="bo-profile-container">
                    <div className="bo-profile-form">
                        <div className="bo-mymenu-first-row">

                            <div className="bo-mymenu-welcome">
                                <h2>{t('backoffice.screens.new_plate.create_plate')}</h2>
                                <span className="bo-icon-edit" title={t('backoffice.screens.single_plate.save_plate')}><SaveOutlined onClick={this.handleSubmit} /></span>
                            </div>

                            <div className="bo-mymenu-welcome" onClick={this.handleCallbackGoBack}> <h3><LeftOutlined /></h3> <h3>{t("backoffice.components.back")}</h3> </div>
                        </div>

                        <section>
                            <SinglePlateCard
                                name='plate_img'
                                img={upload_white}
                                newCss='new-plate'
                                callback={this.handleCallbackInput}
                            />

                            <div className="bo-new-plate-switch">
                                <p style={{ fontSize: '16px' }}>
                                    {t('backoffice.screens.common_screens.visibility')}
                                    <span style={{ paddingLeft: '10px' }}>
                                        <SwitchProfile
                                            handleSwitchCallback={this.handleSwitchCallback}
                                            defaultChecked={true}
                                        />
                                    </span>
                                </p>
                            </div>

                            <div className="bo-profile-flex-inputs">
                                <InputBox
                                    type="text"
                                    placeholder={t('backoffice.components.inputbox.name_plate')}
                                    className={`bo-input-box ${this.state.warning.plate_name ? 'alert' : ''}`}
                                    name="plate_name"
                                    callback={this.handleCallbackInput}
                                    callbackOnFocus={this.handleCallBackFocus}
                                />

                                <InputBox
                                    type="text"
                                    placeholder={t('backoffice.components.inputbox.price')}
                                    className={`bo-input-box ${this.state.warning.plate_price ? 'alert' : ''}`}
                                    name="plate_price"
                                    callback={this.handleCallbackInput}
                                    callbackOnFocus={this.handleCallBackFocus}
                                />
                            </div>

                            <select
                                id='categories'
                                name='plate_category_id'
                                onChange={this.handleCallbackInput}
                                onFocus={this.handleCallBackFocus}
                                className={`bo-input-box ${this.state.warning.plate_category_id ? 'alert' : ''}`}
                                defaultValue=""
                            >
                                <option disabled value="">{t('backoffice.useful_constants.restaurant_categories.title_component')}</option>

                                {
                                    this.state.list_categories.map((category, index) => {
                                        return (
                                            <option
                                                key={index}
                                                value={category.id}
                                            >
                                                {category.name}
                                            </option>
                                        )
                                    })
                                }

                            </select>

                            <TextArea
                                name="plate_description"
                                className={`bo-input-box ${this.state.warning.plate_description ? 'alert' : ''}`}
                                id="description_plate"
                                placeholder={t('backoffice.screens.new_plate.description')}
                                callback={this.handleCallbackInput}
                                callbackOnFocus={this.handleCallBackFocus}
                            />
                        </section>
                    </div>
                </div>
            </LayoutBackOffice>

        )
    }
}

export default withTranslation()(NewPlate)