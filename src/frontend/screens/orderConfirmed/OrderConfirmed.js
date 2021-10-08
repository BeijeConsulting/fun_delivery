import './OrderConfirmed.css'
import HtmlTag from '../../components/funcComponents/htmlTag/HtmlTag'
import Button from "../../../common/components/ui/button/Button";
import gifDelivery from "../../../common/assets/gifDelivery.gif"
import { Steps } from 'antd';

const OrderConfirmed = (props) => {


    const playWithUs = () => {
        //al click del button si aprirà la modale di gamification
    }


    const { Step } = Steps;




    return (
        <>
            <HtmlTag
                tag="h1"
                text="Il tuo ordine sta arrivando!"
                className="title-order-confirmed" />

            <div className="container-gif">

                <img classname="gif-style" src={gifDelivery} alt='delivery guy' />


            </div>

            <div  >
                <Steps  current={1} percent={60} direction= "vertical" >
                    <Step title="In preparazione" description="Il tuo ordine è in preparazione"  />
                    <Step title="Spedito" description="Il rider arriverà a momenti " />
                    <Step title="Consegnato" description="L'ordine è stato consegnato"  />
                </Steps>
            </div>



            <div className="btn-confirmed-class">
                <Button
                    text="Gioca con noi"
                    className={"btn-order-confirmed"}
                    callback={playWithUs} />
            </div>
        </>

    )
}
export default OrderConfirmed