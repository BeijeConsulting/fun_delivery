import './OrderConfirmed.css'
import HtmlTag from '../../components/funcComponents/htmlTag/HtmlTag'
import Button from "../../../common/components/ui/button/Button";
import gifDelivery from "../../../common/assets/gifDelivery.gif"
import { useState } from 'react'

import ChooseGame from "../../../gamification/components/funcComponents/chooseGame/ChooseGame"
import GeneralModal from "../../../gamification/components/funcComponents/generalModal/GeneralModal"
import { Steps } from 'antd';
import HeaderModalX from '../../../gamification/components/funcComponents/headerModalX/HeaderModalX';
import { withTranslation } from 'react-i18next';

const OrderConfirmed = ({ t, i18n }) => {


    const [state, setState] = useState({
        chooseGameModal: false,
    })

    const playWithUs = () => {

        setState({
            chooseGameModal: true,
        })
    }


    const { Step } = Steps;

    const goToOrder = () => {
        setState({
            chooseGameModal:false
        })
    }
    const changeLanguages = (e) => {
        i18n.changeLanguage(e.target.value)
    }


    return (
        <div className="gm-order-confirmed">
        
            
          
            <button value="it" onClick={changeLanguages}>it</button>
            <button  value="en" onClick={changeLanguages}>en</button>
        

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

            </div>

            {
                state.chooseGameModal &&
                <GeneralModal
                    headerModal={<HeaderModalX callback={goToOrder} />}
                    contentModal={<ChooseGame />} />
            }
        </div>

        

    )
}
export default withTranslation()(OrderConfirmed)