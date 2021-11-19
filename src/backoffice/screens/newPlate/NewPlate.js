import { Component } from "react";
import { connect } from 'react-redux';
import { withTranslation } from "react-i18next";
import { LeftOutlined, SaveOutlined } from '@ant-design/icons'
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import InputBox from "../../../common/components/ui/inputBox/InputBox";
import TextArea from "../../../common/components/ui/textarea/TextArea";
import SinglePlateCard from '../../components/funcComponents/singlePlateCard/SinglePlateCard';
import upload_white from '../../assets/images/upload_white.png';
import SwitchProfile from '../../components/ui/switch/SwitchProfile';
import utils from "../../../common/utils/utils";
import 'antd/dist/antd.css';
import { message } from 'antd';
import './NewPlate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Default Image for new plates
import properties from "../../../common/utils/properties";
import genericServices from "../../../common/utils/genericServices";
import { get } from 'lodash'

class NewPlate extends Component {
    constructor(props) {
        super(props)
        this.new_plate = {
            img: '',
            restaurantId: get(this.props, 'restaurantIdDuck.restaurant_id', null),
            name: '',
            description: '',
            price: null,
            categoryId: null,
            visibility: true,
            disableDate: null
        }
        this.state = {
            warning: {
                img: false,
                name: false,
                price: false,
                categoryId: false,
                description: false,
            },
            list_categories: [],
        }
    }

    componentDidMount = async () => {
        AOS.init({ duration: 1000 })
        // Api per avere tutte le categorie dei piatti
        properties.GENERIC_SERVICE = new genericServices()
        let apiCategories = await properties.GENERIC_SERVICE.apiGET(`platecategories`, get(this.props, 'tokenDuck.token', null))
        this.setState({
            list_categories: apiCategories
        })
    }

    handleCallbackGoBack = () => {
        this.props.history.goBack()
    }

    handleCallbackInput = async (e) => {
        if (e.target.name === 'categoryId') {
            this.new_plate[e.target.name] = parseInt(e.target.value);
        } else if (e.target.name === 'img') {
            let file = e.target.files[0]
            let fileName = utils.snakeCaseString(file.name)
            await utils.getBase64(file)
                .then(async result => {
                    console.log('imgbase64:', result);
                    properties.GENERIC_SERVICE = new genericServices()
                    let img = await properties.GENERIC_SERVICE.apiPOST('fileupload',
                        {
                            file_base64: result,
                            file_name: fileName,
                            category: 'plate'
                        },
                        get(this.props, 'tokenDuck.token', null)
                    )
                    this.new_plate[e.target.name] = img
                    message.success('Immagine salvata correttamente', 2);
                })
                .catch(err => {
                    console.log(err);
                });

        } else {
            this.new_plate[e.target.name] = e.target.value
        }
    }
    handleSwitchCallback = (e) => {
        this.new_plate.visibility = e
    }

    handleCallBackFocus = (e) => {
        this.setState({
            warning: {
                ...this.state.warning,
                [e.target.name]: false
            }
        })
    }

    handleSubmit = async () => {

        this.setState(

            () => ({
                warning: {
                    name: this.new_plate.name.length < 4,
                    price: isNaN(parseFloat(this.new_plate.price)),
                    categoryId: !this.new_plate.categoryId,
                    description: this.new_plate.description.length < 4,
                }
            }),

            async () => {
                let savingReady = true;

                for (let key in this.state.warning) {
                    if (this.state.warning[key] === true) {
                        savingReady = false
                        return savingReady
                    }
                }

                if (savingReady === true) {

                    properties.GENERIC_SERVICE = new genericServices()
                    let addNewPlate = await properties.GENERIC_SERVICE.apiPOST('/plate', this.new_plate, get(this.props, 'tokenDuck.token', null))
                    // Find category name
                    let categoryName = this.state.list_categories.find((category) => {
                        return category.id === this.new_plate.categoryId;
                    }).name;
                    this.props.history.push(properties.BO_ROUTING.PLATES, {
                        category_id: parseInt(this.new_plate.categoryId),
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
                                <h2 data-aos="fade-left">{t('backoffice.screens.new_plate.create_plate')}</h2>
                                <span className="bo-icon-edit" title={t('backoffice.screens.single_plate.save_plate')}><SaveOutlined onClick={this.handleSubmit} /></span>
                            </div>

                            <div className="bo-mymenu-welcome" onClick={this.handleCallbackGoBack}> <h3><LeftOutlined /></h3> <h3>{t("backoffice.components.back")}</h3> </div>
                        </div>

                        <section>
                            <div data-aos="zoom-in">
                                <SinglePlateCard
                                    name='img'
                                    img={upload_white}
                                    newCss='new-plate'
                                    callback={this.handleCallbackInput}
                                />
                            </div>


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
                                    className={`bo-input-box ${this.state.warning.name ? 'alert' : ''}`}
                                    name="name"
                                    callback={this.handleCallbackInput}
                                    callbackOnFocus={this.handleCallBackFocus}
                                />

                                <InputBox
                                    type="number"
                                    placeholder={t('backoffice.components.inputbox.price')}
                                    className={`bo-input-box ${this.state.warning.price ? 'alert' : ''}`}
                                    name="price"
                                    callback={this.handleCallbackInput}
                                    callbackOnFocus={this.handleCallBackFocus}
                                />
                            </div>

                            <select
                                id='categories'
                                name='categoryId'
                                onChange={this.handleCallbackInput}
                                onFocus={this.handleCallBackFocus}
                                className={`bo-input-box ${this.state.warning.categoryId ? 'alert' : ''}`}
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
                                name="description"
                                className={`bo-input-box ${this.state.warning.description ? 'alert' : ''}`}
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
const mapStateToProps = state => ({
    tokenDuck: state.tokenDuck,
    restaurantIdDuck: state.restaurantIdDuck
})
export default connect(mapStateToProps)(withTranslation()(NewPlate))