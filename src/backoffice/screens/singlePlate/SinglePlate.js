import { Component } from "react";
import './SinglePlate.css';
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import SinglePlateCard from "../../components/funcComponents/singlePlateCard/SinglePlateCard";
import 'antd/dist/antd.css';
import { LeftOutlined } from '@ant-design/icons'
import { EditFilled, DeleteOutlined, SaveOutlined } from '@ant-design/icons';
import InputBox from "../../../common/components/ui/inputBox/InputBox";
import TextArea from "../../../common/components/ui/textarea/TextArea";
import Button from "../../../common/components/ui/button/Button"
import utils from "../../../common/utils/utils";
import SwitchProfile from "../../components/ui/switch/SwitchProfile";
import properties from "../../../common/utils/properties";
import { get } from "lodash";

class SinglePlate extends Component {
    constructor(props) {
        super(props)
        this.storageData = JSON.parse(localStorage.getItem('localStorageData'));
        this.state = {
            list_categories: [],
            plate_show_title: "",
            data: {
                plate_img: ['', false],
                plate_name: ["", false],
                plate_description: ["", false],
                plate_price: ['', false],
                plate_category_id: ['', false],
            },
            editData: false,
            plate_visibility: true
        }
    }

    componentDidMount = () => {
        this.plateId = get(this.props, 'location.state.plateId', false);
        this.plateName = get(this.props, 'location.state.plateName', false);

        if (!this.plateId || !this.plateName) {
            this.props.history.push(properties.BO_ROUTING.MY_MENU);
        } else {
            let plate = this.storageData.plate_list.find(el => {
                return el.id === this.props.location.state.plateId
            });

            let plateData = {
                plate_img: [plate.plate_img, false],
                plate_name: [plate.plate_name, false],
                plate_description: [plate.plate_description, false],
                plate_price: [plate.plate_price, false],
                plate_category_id: [plate.plate_category_id, false],
            }

            // Simulating api call on localStorage
            this.setState({
                list_categories: this.storageData.plate_categories,
                data: plateData,
                plate_show_title: plate.plate_name,
                plate_visibility: plate.plate_visibility
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
        data[e.target.name] = e.target.name === 'plate_category_id' ? [parseInt(e.target.value), false] : [e.target.value, false]
        this.setState({
            data: data
        });
    }

    handleVisibility = (e) => {
        this.setState(
            () => ({
                plate_visibility: e
            }),

            () => {

                const plateList = this.storageData.plate_list.map(el => {
                    if (el.id === this.props.location.state.plateId) {
                        el.plate_visibility = this.state.plate_visibility
                    }
                    return el
                })
                this.storageData.plate_list = plateList;
                localStorage.setItem('localStorageData', JSON.stringify(this.storageData));
            })
    }

    handleSubmit = () => {
        let newData = {
            plate_img: [this.state.data.plate_img[0], this.state.data.plate_img[0] ? false : true],
            plate_name: [this.state.data.plate_name[0], this.state.data.plate_name[0] ? false : true],
            plate_description: [this.state.data.plate_description[0], this.state.data.plate_description[0] ? false : true],
            plate_price: [this.state.data.plate_price[0], utils.checkNumber(this.state.data.plate_price[0]) && this.state.data.plate_price[0] ? false : true],
            plate_category_id: [this.state.data.plate_category_id[0], this.state.data.plate_img[0] ? false : true],
        }
        let correctCheck = !(!!Object.entries(newData).find((value) => value[1][1] === true));

        this.setState({
            data: newData,
            editData: correctCheck ? false : true,
            plate_show_title: correctCheck ? newData.plate_name[0] : this.state.plate_show_title
        })

        if (correctCheck) {
            // Saving modified plate on localStorage
            let modifiedPlate = {
                plate_img: newData.plate_img[0],
                plate_name: newData.plate_name[0],
                plate_description: newData.plate_description[0],
                plate_price: newData.plate_price[0],
                plate_category_id: newData.plate_category_id[0]
            }

            const newList = this.storageData.plate_list.map((el) => {
                if (el.id === this.props.location.state.plateId) {
                    el = {
                        ...el,
                        ...modifiedPlate
                    }
                }
                return el;
            })
            this.storageData.plate_list = newList;
            localStorage.setItem('localStorageData', JSON.stringify(this.storageData));

        }
    }

    handleCallbackGoBack = () => {
        this.props.history.goBack()
    }

    handleDelete = () => {
        /* Elimination plate to localSotorage */
        const plateList = this.storageData.plate_list.filter((el, key) => {
            return el.id !== this.props.location.state.plateId
        })
        this.storageData.plate_list = plateList;
        localStorage.setItem('localStorageData', JSON.stringify(this.storageData));

        // Find plate category name
        let categoryName = this.state.list_categories.find(el => {
            return el.id === this.state.data.plate_category_id[0]
        }).name;

        // Redirect to right category page LOL
        this.props.history.push(properties.BO_ROUTING.PLATES, {
            titlePage: categoryName.toUpperCase(),
            category_id: this.state.data.plate_category_id,
            elementDeleted: true
        })

    }

    render() {
        return (
            <>
                <LayoutBackOffice pageTitle='Piatto'>

                    <div className="bo-profile-container">
                        <div className="bo-profile-form">
                            <div className="bo-mymenu-first-row">
                                <div className="bo-mymenu-welcome">
                                    <h2>{this.state.plate_show_title}</h2>
                                    {
                                        this.state.editData &&
                                        <>                                           
                                            <span className="bo-icon-edit" title="Salva Piatto"><SaveOutlined onClick={this.handleSubmit} /></span>
                                            <span className="bo-icon-edit delete" title="Elimina Piatto"><DeleteOutlined onClick={this.handleDelete} /></span>
                                        </>
                                    }
                                    {
                                        this.state.editData === false &&
                                        <span className="bo-icon-edit" title="Modifica Piatto"><EditFilled onClick={this.handleEdit} /></span>
                                    }
                                </div>
                                <div className="bo-mymenu-welcome" onClick={this.handleCallbackGoBack}> <h3><LeftOutlined /></h3> <h3>indietro</h3> </div>
                            </div>

                            <SinglePlateCard
                                img={this.state.data.plate_img[0]}
                                callback={this.handleCallbackInput}
                                name={'plate_img'}
                            />

                            <div className="bo-profile-switch">
                                <p>Visibilità
                                    <span>
                                        <SwitchProfile
                                            handleSwitchCallback={this.handleVisibility}
                                            value={this.state.plate_visibility}
                                        />
                                    </span>
                                </p>
                            </div>

                            <div className="bo-profile-flex-inputs">
                                <InputBox
                                    type="text"
                                    placeholder="Nome piatto"
                                    className={`bo-input-box ${this.state.data.plate_name[1] ? 'alert' : ''}`}
                                    name="plate_name"
                                    value={this.state.data.plate_name[0]}
                                    disable={!this.state.editData}
                                    callback={this.handleCallbackInput}
                                />

                                <InputBox
                                    type="text"
                                    placeholder="Prezzo €"
                                    className={`bo-input-box ${this.state.data.plate_price[1] ? 'alert' : ''}`}
                                    name="plate_price"
                                    value={this.state.data.plate_price[0]}
                                    disable={!this.state.editData}
                                    callback={this.handleCallbackInput}
                                />
                            </div>

                            <select
                                id='categories'
                                name='plate_category_id'
                                className='bo-input-box'
                                onChange={this.handleCallbackInput}
                                //onFocus={this.handleCallBackFocus}
                                //className={`bo-input-box ${this.state.warning.plate_category_id ? 'alert' : ''}`}                                
                                value={this.state.data.plate_category_id[0]}
                                disabled={!this.state.editData}
                            >
                                <option disabled value="">Categorie</option>

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
                                className={`bo-input-box ${this.state.data.plate_description[1] ? 'alert' : ''}`}
                                id="description_plate"
                                value={this.state.data.plate_description[0]}
                                disable={!this.state.editData}
                                callback={this.handleCallbackInput}
                            />
                        </div>
                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}

export default SinglePlate