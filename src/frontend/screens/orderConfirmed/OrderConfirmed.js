import './OrderConfirmed.css'
import HtmlTag from '../../components/funcComponents/htmlTag/HtmlTag'
import Button from "../../../common/components/ui/button/Button";
import gifDelivery from "../../../common/assets/gifDelivery.gif"
import { useState } from 'react'

import ChooseGame from "../../../gamification/components/funcComponents/chooseGame/ChooseGame"
import GeneralModal from "../../../gamification/components/funcComponents/generalModal/GeneralModal"
import { Steps } from 'antd';
import { withTranslation } from 'react-i18next';
import { useHistory } from 'react-router';


const OrderConfirmed = ({ t, i18n }) => {


    const [state, setState] = useState({
        chooseGameModal: false,
    })
    let history = useHistory()

    const playWithUs = () => {

        setState({
            chooseGameModal: true,
        })
    }


    const { Step } = Steps;

    // const changeLanguages = (e) => {
    //     i18n.changeLanguage(e.target.value)
    // }

    const goToMenuRestaurant = () => {
        history.goBack('/menuRestaurant')
    }

    return (
        <div className="gm-order-confirmed">


            <HtmlTag
                tag="h1"
                text={t('frontend.screens.order_confirmed.title')}
                className="title-order-confirmed" />



            <div className="container-gif">
                {!state.chooseGameModal &&
                    <img className="gif-style" src={gifDelivery} alt='delivery guy' />}
            </div>

            <div  >
                <Steps current={1} percent={60} direction="vertical" >
                    <Step title={t('frontend.screens.order_confirmed.step_one')} description={t('frontend.screens.order_confirmed.step_one_description')} />
                    <Step title={t('frontend.screens.order_confirmed.step_two')} description={t('frontend.screens.order_confirmed.step_two_description')} />
                    <Step title={t('frontend.screens.order_confirmed.step_three')} description={t('frontend.screens.order_confirmed.step_three_description')} />
                </Steps>
            </div>



            <div className="btn-confirmed-class">
                <Button
                    text={t('frontend.components.order_confirmed.button')}
                    className={"btn-order-confirmed"}
                    callback={playWithUs} />

                <Button
                    text={t('frontend.components.order_confirmed.buttonBack')}
                    className={"btn-order-confirmed"}
                    callback={goToMenuRestaurant}
                    style={{ marginLeft: '10px' }} />


            </div>



            {
                state.chooseGameModal &&
                <GeneralModal
                    contentModal={<ChooseGame />} />
            }
        </div>



    )
}
export default withTranslation()(OrderConfirmed)