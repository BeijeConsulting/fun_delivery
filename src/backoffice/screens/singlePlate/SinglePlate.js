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
            showButton: false
        }
    }

    handleCallbackGoBack = () => {
        this.props.history.goBack()
    }

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
                                    <h2>Nome Piatto</h2>
                                    <span className="bo-icon-edit"><EditFilled /></span>
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
                                    className="bo-input-box"
                                    name="plate"
                                />

                                <InputBox
                                    type="text"
                                    placeholder="Prezzo € "
                                    className="bo-input-box"
                                    name="price"
                                />
                            </div>
                            <Select
                                data={this.categories}
                                selectID='categories'
                                selectName='restaurant_category'
                                className='bo-input-box'
                            />

                            <TextArea
                                name="description"
                                className="bo-input-box"
                                id="description_plate"
                                value="Descrizione Piatto"
                            />
                            <div className="bo-plate-row-button">
                                {
                                    this.state.showButton &&
                                    <Button
                                        className="bo-btn-save"
                                        text="Salva"
                                    />
                                }
                                <Button
                                    className="bo-btn-delete"
                                    text="Elimina"
                                />
                            </div>
                        </div>
                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}

export default SinglePlate