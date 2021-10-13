import "./Footer.css"
import { FacebookFilled, InstagramFilled, LinkedinFilled, TwitterSquareFilled } from '@ant-design/icons';
import Button from '../../../../common/components/ui/button/Button';
import logo_beijeRosa from '../../../../common/assets/logo_beijeRosa.png'
import HtmlTag from "../htmlTag/HtmlTag";



const Footer = () => {




    return (
        <footer>
            <div className="fe-footer-container">

                <div class="fe-footer-logo">

                     <img className="fe-logoRosa-style" src={logo_beijeRosa} /> 
                
                    
                </div>


                <div class="fe-footer-icons">
                    <HtmlTag
                        tag='p'
                        text='Seguici'
                        className="fe-social-p"
                    />
                    <FacebookFilled />
                    <InstagramFilled />
                    <LinkedinFilled />
                    <TwitterSquareFilled />


                </div>



                <div class="fe-footer-right">

                    <p>Diventa partner di Beije Delivery</p>
                    <Button
                        text='Registrati'
                        // callback={}
                        className='fe-footer-btn'
                    />

                    <p>Sei già un nostro partner?</p>
                    <Button
                        text='Accedi'
                        // callback={}
                        className='fe-footer-btn'
                    />


                </div>
            </div>
        </footer >
    )
}
export default Footer