import { Component } from "react";
import './SinglePlate.css';
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import SinglePlateCard from "../../components/funcComponents/singlePlateCard/SinglePlateCard";
import 'antd/dist/antd.css';
import { LeftOutlined } from '@ant-design/icons'
import { EditFilled } from '@ant-design/icons';
import InputBox from "../../../common/components/ui/inputBox/InputBox";
import TextArea from "../../../common/components/ui/textarea/TextArea";
import Button from "../../../common/components/ui/button/Button"
import Piatto1 from '../../assets/images/piatto1.jpg'
import utils from "../../../common/utils/utils";
import SwitchProfile from "../../components/ui/switch/SwitchProfile";
import properties from "../../../common/utils/properties";

class SinglePlate extends Component {
    constructor(props) {
        super(props)        
        this.state = {
            list_categories: [],
            plate_show_title: "Spaghetti alle vongole",
            data: {
                plate_img: [Piatto1, false],
                plate_name: ["Spaghetti alle vongole", false],
                plate_description: ["Spaghetti", false],
                plate_price: [342.5, false],
                plate_category_id: ["Italiano", false],
            },
            editData: false,
            plate_visibility: true
        }
    }

    componentDidMount = () => {
        // Simulating api call on localStorage
        this.setState({
            list_categories: JSON.parse(localStorage.getItem('localStorageData')).plate_categories
        })
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
            editData: correctCheck ? false : true
        })

        if(correctCheck) {
            this.setState({
                plate_show_title: newData.plate_name[0]
            })
        }
        
        
      
    }

    handleCallbackGoBack = () => { this.props.history.goBack() }

    // handleVisibility = (e) => {
    //     this.setState(prevState => ({
    //         ...prevState.data,
    //         ...prevState.editData,
    //         plate_visibility: e
    //     }))        
    // }

    // handleDelete = () => {      
    //     this.props.history.push(properties.BO_ROUTING.PLATES)
    // }

    render() {
        return (
            <>
                <LayoutBackOffice pageTitle='Piatto'>
                    <div className="bo-profile-container">
                        <div className="bo-profile-form">
                            <div className="bo-mymenu-first-row">
                                <div className="bo-mymenu-welcome">
                                    <h2>{this.state.plate_show_title}</h2>
                                    <span className="bo-icon-edit"><EditFilled onClick={this.handleEdit} /></span>
                                </div>
                                <div className="bo-mymenu-welcome" onClick={this.handleCallbackGoBack}> <h3><LeftOutlined /></h3> <h3>indietro</h3> </div>
                            </div>

                            <SinglePlateCard img={Piatto1} />

                            <div className="bo-profile-switch">
                                <p>Visibilità
                                    <span>
                                        <SwitchProfile
                                            callback={this.handleVisibility}
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
                                defaultValue=""
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
                                disabled={!this.state.editData}
                                callback={this.handleCallbackInput}
                            />

                            <div className="bo-plate-row-button">
                                {
                                    this.state.editData &&
                                    <>
                                        <Button
                                            className="bo-btn-save"
                                            text="Salva"
                                            callback={this.handleSubmit}
                                        />
                                        <Button
                                            className="bo-btn-delete"
                                            text="Elimina"
                                            callback={this.handleDelete}
                                        />
                                    </>
                                }

                            </div>
                        </div>
                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}

export default SinglePlate