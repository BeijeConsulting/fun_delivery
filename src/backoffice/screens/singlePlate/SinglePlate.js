import { Component } from "react";
import './SinglePlate.css';
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import SinglePlateCard from "../../components/funcComponents/singlePlateCard/SinglePlateCard";
import 'antd/dist/antd.css';
import { LeftOutlined } from '@ant-design/icons'
import { EditFilled } from '@ant-design/icons';
import InputBox from "../../../common/components/ui/inputBox/InputBox";
import Select from "../../../common/components/ui/select/Select";
import TextArea from "../../../common/components/ui/textarea/TextArea";
import Button from "../../../common/components/ui/button/Button"
import Piatto1 from '../../assets/images/piatto1.jpg'
import utils from "../../../common/utils/utils";
class SinglePlate extends Component {
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
        this.state = {
            data: {
                plate_img: [Piatto1, false],
                plate_name: ["Spaghetti alle vongole", false],
                plate_description: ["Spaghetti", false],
                plate_price: [342.5, false],
                plate_category_id: ["Italiano", false],
                plate_visibility: [false, false],
            },
            editData: false,
            plate_visibility: true,
        }
    }

    handleEdit = () => { this.setState({ editData: true }) }

    handleSubmit = () => {
        let newData = {
            plate_img: [this.state.data.plate_img[0], this.state.data.plate_img[0] !== undefined],
            plate_name: [this.state.data.plate_name[0], this.state.data.plate_name[0] !== undefined],
            plate_description: [this.state.data.plate_description[0], this.state.data.plate_description[0] !== undefined],
            plate_price: [this.state.data.plate_price[0], utils.checkNumber(this.state.data.plate_price[0])],
            plate_category_id: [this.state.data.plate_category_id[0], this.state.data.plate_img[0] !== undefined],
        }

        if (!!Object.entries(newData).find((value) => value[1][1] === true) && !!Object.entries(newData).find((value) => value[1][0] === "")) {
            this.setState({ //TODO add plate visibility
                data: newData,
                editData: false
            })
            console.log(this.state)
        } else { 
            this.setState({ //TODO add plate visibility
                data: newData,
                editData: true
            })
        }
    }

    handleCallbackGoBack = () => { this.props.history.goBack() }

    render() {
        return (
            <>
                <LayoutBackOffice
                    pageTitle='Piatto'
                >
                    <div className="bo-profile-container">
                        <div className="bo-profile-form">
                            <div className="bo-mymenu-first-row">
                                <div className="bo-mymenu-welcome">
                                    <h2>{this.state.data.plate_name[0]}</h2>
                                    <span className="bo-icon-edit"><EditFilled onClick={this.handleEdit} /></span>
                                </div>
                                <div className="bo-mymenu-welcome" onClick={this.handleCallbackGoBack}> <h3><LeftOutlined /></h3> <h3>indietro</h3> </div>
                            </div>
                            <SinglePlateCard
                                img={Piatto1}
                            />
                            <div className="bo-profile-flex-inputs">
                                <InputBox
                                    type="text"
                                    placeholder="Nome piatto"
                                    className={`bo-input-box ${this.state.data.plate_name[0] ? 'alert' : ''}`}
                                    name="plate"
                                    value={this.state.data.plate_name[0]}
                                    disable={!this.state.editData}
                                />

                                <InputBox
                                    type="text"
                                    placeholder="Prezzo € "
                                    className={`bo-input-box ${this.state.data.plate_price[0] ? 'alert' : ''}`}
                                    name="price"
                                    value={this.state.data.plate_price[0]}
                                    disable={!this.state.editData}
                                />
                            </div>
                            <Select
                                data={this.categories}
                                selectID='categories'
                                selectName='restaurant_category'
                                className={`bo-input-box ${this.state.data.plate_category_id[0] ? 'alert' : ''}`}
                                value={this.state.data.plate_category_id[0]}
                                disable={!this.state.editData}
                            />

                            <TextArea
                                name="description"
                                className={`bo-input-box ${this.state.data.plate_description[1] ? 'alert' : ''}`}
                                id="description_plate"
                                value={this.state.data.plate_description[0]}
                                disable={!this.state.editData}
                            />
                            <div className="bo-plate-row-button">
                                {
                                    this.state.editData &&
                                    <>
                                        <Button
                                            className="bo-btn-save"
                                            text="Salva"
                                        />
                                        <Button
                                            className="bo-btn-delete"
                                            text="Elimina"
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