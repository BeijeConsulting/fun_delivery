import "./Footer.css"
import { FacebookFilled, InstagramFilled, LinkedinFilled, TwitterSquareFilled } from '@ant-design/icons';
import Button from '../../../../common/components/ui/button/Button';
import logo_beijeRosa from '../../../../common/assets/logo_beijeRosa.png'
import HtmlTag from "../htmlTag/HtmlTag";
import properties from "../../../../common/utils/properties";
import { useHistory } from "react-router";
import { withTranslation } from "react-i18next";





const Footer = ({ t, i18n }) => {
    
    let history = useHistory();

    const goToPageRegistration = () => {
        history.push(properties.BO_ROUTING.REGISTRATION)
    }

    const goToPageLogin = () => {
        history.push(properties.BO_ROUTING.LOGIN)
    }

   

    return (
        <footer>
            <div className="fe-footer-container">

                <div className="fe-footer-logo">

                    <img className="fe-logoRosa-style" src={logo_beijeRosa} />


                </div>


                <div className="fe-footer-icons">
                    <HtmlTag
                        tag='p'
                        text={t('frontend.components.landing_page.footer.paragraph.third')}
                        className="fe-social-p"
                    />
                    <FacebookFilled />
                    <InstagramFilled />
                    <LinkedinFilled />
                    <TwitterSquareFilled />


                </div>



                <div className="fe-footer-right">

                    <p>{t('frontend.components.landing_page.footer.paragraph.first')}</p>

                    <Button
                        text={t('frontend.components.landing_page.footer.button.register')}
                        callback={goToPageRegistration}
                        className='fe-footer-btn'
                    />


                    <p>{t('frontend.components.landing_page.footer.paragraph.second')}</p>

                    <Button
                        text={t('frontend.components.landing_page.footer.button.login')}
                        callback={goToPageLogin}
                        className='fe-footer-btn'
                    />


                </div>
            </div>
        </footer >
    )
}
export default withTranslation()(Footer)