import './OrderConfirmed.css'
import HtmlTag from '../../components/funcComponents/htmlTag/HtmlTag'
import Button from "../../../common/components/ui/button/Button";
import gifDelivery from "../../../common/assets/gifDelivery.gif"
import { useState } from 'react'

import ChooseGame from "../../../gamification/components/funcComponents/chooseGame/ChooseGame"
import GeneralModal from "../../../gamification/components/funcComponents/generalModal/GeneralModal"
import { Steps } from 'antd';
import HeaderModalX from '../../../gamification/components/funcComponents/headerModalX/HeaderModalX';

const OrderConfirmed = (props) => {

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


    return (
        <div className="gm-order-confirmed">
            <HtmlTag
                tag="h1"
                text="Il tuo ordine sta arrivando!"
                className="title-order-confirmed" />

            <div className="container-gif">
                {!state.chooseGameModal &&
                    <img className="gif-style" src={gifDelivery} alt='delivery guy' />}
            </div>

            <div  >
                <Steps current={1} percent={60} direction="vertical" >
                    <Step title="In preparazione" description="Il tuo ordine è in preparazione" />
                    <Step title="Spedito" description="Il rider arriverà a momenti " />
                    <Step title="Consegnato" description="L'ordine è stato consegnato" />
                </Steps>
            </div>



            <div className="btn-confirmed-class">
                <Button
                    text="Gioca con noi"
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
export default OrderConfirmed