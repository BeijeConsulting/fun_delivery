import './OrderConfirmed.css'
import HtmlTag from '../../components/funcComponents/htmlTag/HtmlTag'
import Button from "../../../common/components/ui/button/Button";
import gifDelivery from "../../../common/assets/gifDelivery.gif"
import { Steps } from 'antd';
import { withTranslation } from 'react-i18next';

const OrderConfirmed = ({ t, i18n }) => {



    const playWithUs = () => {
        //al click del button si aprirà la modale di gamification
    }


    const { Step } = Steps;

    const changeLanguages = (e) => {
        i18n.changeLanguage(e.target.value)
    }


    return (
        <>
            
          
            <button value="it" onClick={changeLanguages}>it</button>
            <button  value="en" onClick={changeLanguages}>en</button>
        

            <HtmlTag
                tag="h1"
                text={t('frontend.screens.order_confirmed.title')}
                className="title-order-confirmed" />

            

            <div className="container-gif">

                <img classname="gif-style" src={gifDelivery} alt='delivery guy' />


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


        </>

    )
}
export default withTranslation()(OrderConfirmed)