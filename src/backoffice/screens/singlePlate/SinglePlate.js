import { DeleteOutlined, EditFilled, SaveOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { get } from "lodash";
import { Component } from "react";
import { withTranslation } from "react-i18next";
import InputBox from "../../../common/components/ui/inputBox/InputBox";
import TextArea from "../../../common/components/ui/textarea/TextArea";
import properties from "../../../common/utils/properties";
import utils from "../../../common/utils/utils";
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import SinglePlateCard from "../../components/funcComponents/singlePlateCard/SinglePlateCard";
import BackPageButton from "../../components/ui/backPageButton/BackPageButton";
import SwitchProfile from "../../components/ui/switch/SwitchProfile";
import { connect } from 'react-redux';
import genericServices from '../../../common/utils/genericServices';
import './SinglePlate.css';
class SinglePlate extends Component {
    constructor(props) {
        super(props)
        // this.storageData = JSON.parse(localStorage.getItem('localStorageData'));
        this.state = {
            list_categories: [],
            plate_show_title: "",
            data: {
                img: ['', false],
                restaurantId: get(this.props, 'restaurantIdDuck.restaurant_id', null),
                name: ["", false],
                description: ["", false],
                price: ['', false],
                categoryId: ['', false],
            },
            editData: false,
            visibility: true
        }
        /*
        categoryId: 1
        description: "pomodoro, mozzarella, basilico fresco"
        disableDate: null
        img: ""
        name: "Pizza Margherita"
        price: 10
        restaurantId: 3
        visibility: true
        */
    }

    componentDidMount = async () => {
        this.plateId = get(this.props, 'location.state.plateId', false);
        this.plateName = get(this.props, 'location.state.plateName', false);
        this.plateCategoryId = get(this.props, 'location.state.plateCategoryId', false)

        if (!this.plateId || !this.plateName || !this.plateCategoryId) {
            this.props.history.push(properties.BO_ROUTING.MY_MENU);
        } else {
            // Api per visualizzare tutti i piatti di quella categoria
            properties.GENERIC_SERVICE = new genericServices()
            let categoryPlates = await properties.GENERIC_SERVICE.apiGET(`plates/restaurant/${get(this.props, 'restaurantIdDuck.restaurant_id', null)}/${this.plateCategoryId}`,
                get(this.props, 'tokenDuck.token', null))

            let plate = categoryPlates.find(el => {
                return el.id === this.props.location.state.plateId
            });

            let plateData = {
                img: [plate.img, false],
                name: [plate.name, false],
                description: [plate.description, false],
                price: [plate.price, false],
                categoryId: [plate.categoryId, false],
            }

            // Api per avere tutte le categorie dei piatti
            properties.GENERIC_SERVICE = new genericServices()
            let apiCategories = await properties.GENERIC_SERVICE.apiGET(`platecategories`, get(this.props, 'tokenDuck.token', null))

            // Setto gli stati
            this.setState({
                list_categories: apiCategories,
                data: plateData,
                plate_show_title: plate.name,
                visibility: plate.visibility
            })
        }

    }

    handleEdit = () => {
        this.setState({
            editData: true
        })
    }

    handleCallbackInput = (e) => {
        let data = this.state.data;
        data[e.target.name] = e.target.name === 'categoryId' ? [parseInt(e.target.value), false] : [e.target.value, false]
        this.setState({
            data: data
        });
    }

    handleCallBackFocus = (e) => {
        let field = this.state.data[e.target.name];
        field[1] = false;

        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: field
            }
        })
    }

    handleVisibility = (e) => {
        this.setState({
            /* () => ({
                visibility: e
            }),

            () => {

                const plateList = this.storageData.plate_list.map(el => {
                    if (el.id === this.props.location.state.plateId) {
                        el.visibility = this.state.visibility
                    }
                    return el
                })
                this.storageData.plate_list = plateList;
                localStorage.setItem('localStorageData', JSON.stringify(this.storageData));
            }) */
            visibility: e
        })
    }

    handleSubmit = async () => {
        let newData = {
           // img: [this.state.data.img[0], this.state.data.img[0] ? false : true],
            name: [this.state.data.name[0], this.state.data.name[0] ? false : true],
            description: [this.state.data.description[0], this.state.data.description[0] ? false : true],
            price: [this.state.data.price[0], utils.checkNumber(this.state.data.price[0]) && this.state.data.price[0] ? false : true],
            categoryId: [this.state.data.categoryId[0], this.state.data.categoryId[0] ? false : true],
        }
        let correctCheck = !(!!Object.entries(newData).find((value) => value[1][1] === true));
        if (correctCheck) {
            // Saving modified plate on localStorage
            let modifiedPlate = {
             //   img: newData.img[0],
                restaurantId: get(this.props, 'restaurantIdDuck.restaurant_id', null),
                name: newData.name[0],
                description: newData.description[0],
                price: newData.price[0],
                categoryId: newData.categoryId[0],
                visibility: this.state.visibility,
                disableDate: null
            }

            // Api effettuare update del piatto 
            properties.GENERIC_SERVICE = new genericServices()
            let apiUpdatePlate = await properties.GENERIC_SERVICE.apiPUT(`plate/update/${this.plateId}`, modifiedPlate, get(this.props, 'tokenDuck.token', null))
            console.log('apiUpdatePlate', apiUpdatePlate)
            
            this.setState({
                data: newData,
                editData: correctCheck ? false : true,
                plate_show_title: correctCheck ? newData.name[0] : this.state.plate_show_title
            })
        }
    }

    handleDelete = () => {
        /* Delete plate from localSotorage */
        const plateList = this.storageData.plate_list.filter((el, key) => {
            return el.id !== this.props.location.state.plateId
        })
        this.storageData.plate_list = plateList;
        localStorage.setItem('localStorageData', JSON.stringify(this.storageData));

        // Find plate category name
        let categoryName = this.state.list_categories.find(el => {
            return el.id === this.state.data.categoryId[0]
        }).name;

        // Redirect to right category page LOL
        this.props.history.push(properties.BO_ROUTING.PLATES, {
            titlePage: categoryName.toUpperCase(),
            category_id: this.state.data.categoryId,
            elementDeleted: true
        })

    }

    render() {
        const { t } = this.props
        return (
            <>
                <LayoutBackOffice pageTitle={t('backoffice.screens.single_plate.title')}>

                    <div className="bo-profile-container">
                        <div className="bo-profile-form">
                            <div className="bo-mymenu-first-row">
                                <div className="bo-mymenu-welcome">
                                    <h2>{this.state.plate_show_title}</h2>
                                    {
                                        this.state.editData &&
                                        <>
                                            <span className="bo-icon-edit" title={t('backoffice.screens.single_plate.save_plate')} style={{ marginLeft: '20px' }}><SaveOutlined onClick={this.handleSubmit} /></span>
                                            <span className="bo-icon-edit delete" title={t('backoffice.screens.single_plate.delete_plate')}><DeleteOutlined onClick={this.handleDelete} /></span>
                                        </>
                                    }
                                    {
                                        this.state.editData === false &&
                                        <span className="bo-icon-edit" title={t('backoffice.screens.single_plate.edit_plate')}><EditFilled onClick={this.handleEdit} /></span>
                                    }
                                </div>
                                <BackPageButton
                                    classProp={"bo-mymenu-welcome"}
                                    historyProp={this.props.history}
                                />
                            </div>

                            <section>
                                <SinglePlateCard
                                   // img={this.state.data.img[0]}
                                    callback={this.handleCallbackInput}
                                    name={'img'}
                                    newCss=''
                                    disable={!this.state.editData}
                                />

                                <div className="bo-profile-switch">
                                    <p style={{ fontSize: '16px' }}>{t('backoffice.screens.single_plate.visibility')}
                                        <span style={{ paddingLeft: '10px' }}>
                                            <SwitchProfile
                                                handleSwitchCallback={this.handleVisibility}
                                                value={this.state.visibility}
                                            />
                                        </span>
                                    </p>
                                </div>

                                <div className="bo-profile-flex-inputs">
                                    <InputBox
                                        type="text"
                                        placeholder={t('backoffice.components.inputbox.name_plate')}
                                        className={`bo-input-box ${this.state.data.name[1] ? 'alert' : ''}`}
                                        name="name"
                                        value={this.state.data.name[0]}
                                        disable={!this.state.editData}
                                        callback={this.handleCallbackInput}
                                        newCss=''
                                    />

                                    <InputBox
                                        type="text"
                                        placeholder={t('backoffice.components.inputbox.price')}
                                        className={`bo-input-box ${this.state.data.price[1] ? 'alert' : ''}`}
                                        name="price"
                                        value={this.state.data.price[0]}
                                        disable={!this.state.editData}
                                        callback={this.handleCallbackInput}
                                        callbackOnFocus={this.handleCallBackFocus}
                                    />
                                </div>

                                <select
                                    id='categoryId'
                                    name='categoryId'
                                    onChange={this.handleCallbackInput}
                                    onFocus={this.handleCallBackFocus}
                                    className={`bo-input-box ${this.state.data.categoryId[1] ? 'alert' : ''}`}
                                    value={this.state.data.categoryId[0]}
                                    disabled={!this.state.editData}
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
                                    className={`bo-input-box ${this.state.data.description[1] ? 'alert' : ''}`}
                                    id="description_plate"
                                    value={this.state.data.description[0]}
                                    disable={!this.state.editData}
                                    callback={this.handleCallbackInput}
                                    callbackOnFocus={this.handleCallBackFocus}
                                />
                            </section>

                        </div>
                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}
const mapStateToProps = state => ({
    tokenDuck: state.tokenDuck,
    restaurantIdDuck: state.restaurantIdDuck
})
export default connect(mapStateToProps)(withTranslation()(SinglePlate))