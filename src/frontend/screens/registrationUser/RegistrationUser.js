import React from "react";

//import Button
import InputBox from "../../../common/components/ui/inputBox/InputBox";
import Button from "../../../common/components/ui/button/Button";
import HtmlTag from "../../components/funcComponents/htmlTag/HtmlTag";
import delivery from '../../../common/assets/delivery.png'
import './RegistrationUser.css'
import i18n from "../../../common/localization/i18n";
import { withTranslation } from 'react-i18next';

//import gm-modal
import GeneralModal from '../../../gamification/components/funcComponents/generalModal/GeneralModal'
import ModalCongratulation from '../../../gamification/components/ui/modalCongratulation/ModalCongratulation'
import HeaderModalX from "../../../gamification/components/funcComponents/headerModalX/HeaderModalX"
import Fireworks from '../../../gamification/components/funcComponents/fireworks/Fireworks'

//utils
import utils from "../../../common/utils/utils";
import Navbar from "../../components/ui/navbar/Navbar";

class RegistrationUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                userName: "",
                surname: "",
                email: "",
                phone: "",
                password: "",
                confpsw: "",
                beijeCoin: 0,
                experience: 0,
                avatar: {
                    userAvatars: [0],
                    selectedAvatar: 0,
                },
                badge: {
                    userBadges: [0],
                    selectedBadge: 0,
                },
                mission: [],
                freeDelivery: false,
                freeDeliveryModal: false,
                discount: false
            },
            errormsg: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({
            userInfo: {
                ...this.state.userInfo,
                [e.target.name]: e.target.value
            }
        });


    };


    //TEST TEMP
    //Levare alert e mettere i vari messaggi di errori e di login effettuato
    handleSignUp = () => {
        let error = this.state.errormsg

        if (utils.validateName(this.state.userInfo.userName) === false) {
            error = i18n.t('frontend.components.login_page.error_registration.userName')
        } else if (utils.validateName(this.state.userInfo.surname) === false) {
            error = i18n.t('frontend.components.login_page.error_registration.surname')
        } else if (utils.validateEmail(this.state.userInfo.email) === false) {
            error = i18n.t('frontend.components.login_page.error_registration.email')
        } else if (utils.validatePhone(this.state.userInfo.phone) === false) {
            error = i18n.t('frontend.components.login_page.error_registration.phone')
        } else if (utils.validatePassword(this.state.userInfo.password) === false) {
            error = i18n.t('frontend.components.login_page.error_registration.password')
        } else if (this.state.userInfo.confpsw !== this.state.userInfo.password) {
            error = i18n.t('frontend.components.login_page.error_registration.confirm_password')
        } else {
            error = i18n.t('frontend.components.login_page.error_registration.registration_accept')
            this.props.history.push('/userHome')
        }

        this.setState({
            errormsg: error
        })

        localStorage.setItem('userInfo', JSON.stringify(this.state.userInfo))

    }

    handleClickCloseModal = () => {
        this.props.history.push('/userHome')
    }

    handleClickButton = (e) => {
        i18n.changeLanguage(e.target.value);
    }
    render() {

        const { t } = this.props

        return (
            <>
                <Navbar />

                <div className="frontend-outer-container fe-registration">
                    <div className="frontend-inner-container">
                        <HtmlTag
                            tag="h1"
                            text={t('frontend.screens.registrationUser.title')}
                            className='frontend-h1'
                        />
                        <h3 style={{
                            color: "#F24464"
                        }}>{this.state.errormsg}</h3>
                        <InputBox
                            placeholder={t('frontend.components.login_page.register_placeholder.userName')}
                            name={"userName"}
                            type={"text"}
                            value={this.state.userName}
                            callback={this.handleInputChange}
                            className={"frontend-input"}
                        />
                        <InputBox
                            placeholder={t('frontend.components.login_page.register_placeholder.surname')}
                            name={"surname"}
                            type={"text"}
                            value={this.state.surname}
                            callback={this.handleInputChange}
                            className={"frontend-input"}
                        />

                        <InputBox
                            placeholder={t('frontend.components.login_page.register_placeholder.email')}
                            name={"email"}
                            type={"email"}
                            value={this.state.email}
                            callback={this.handleInputChange}
                            className={"frontend-input"}
                        />

                        <InputBox
                            placeholder={t('frontend.components.login_page.register_placeholder.phone')}
                            name={"phone"}
                            type={"tel"}
                            value={this.state.phone}
                            callback={this.handleInputChange}
                            className={"frontend-input"}
                        />

                        <InputBox
                            placeholder={t('frontend.components.login_page.register_placeholder.password')}
                            name={"password"}
                            type={"password"}
                            value={this.state.password}
                            callback={this.handleInputChange}
                            className={"frontend-input"}
                        />

                        <InputBox
                            placeholder={t('frontend.components.login_page.register_placeholder.confpsw')}
                            name={"confpsw"}
                            type={"password"}
                            value={this.state.confpsw}
                            callback={this.handleInputChange}
                            className={"frontend-input"}
                        />
                        {/* validazione dati e invio dei dati */}
                        <Button
                            text={t('frontend.components.login_page.button.register')}
                            callback={this.handleSignUp}
                            className={"frontend-primary-btn"}
                        />

                        {
                            this.state.errormsg === 'Registration made' &&
                            <GeneralModal headerModal={<HeaderModalX callback={this.handleClickCloseModal} />} contentModal={<ModalCongratulation cascadeMoney={<Fireworks />} />} />
                        }

                    </div>

                    <img className='frontend-img' src={delivery} alt='delivery guy' />
                </div>
            </>
        );
    }
}

export default withTranslation()(RegistrationUser)