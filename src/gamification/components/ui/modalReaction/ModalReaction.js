import './ModalReaction.css'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import Button from '../../../../common/components/ui/button/Button'
import { withTranslation } from 'react-i18next'
const ModalReaction = (props) => {

    const handleCallback = () => {
        props.callback()
    }
    const handlePlayAgain = () => {
        window.location.reload()
    }
    const chooseGameCallback = () => {
        props.chooseGameCallback()
    }
    const { t } = props;
    return (
        <div className='gm-reaction-container'>
            {/* <div className="gm-cascade" > */}
            {props.cascadeMoney}

            <p className='gm-reaction-text'>{props.textModal}</p>
            <div className='gm-reaction-container-button'>
                <Button
                    className='gm-reaction-button'
                    callback={handlePlayAgain}
                    text={t('gamification.components.modalreaction.playagain')} />
                <Button
                    className='gm-reaction-button'
                    callback={chooseGameCallback}
                    text={t('gamification.components.modalreaction.changegame')} />
                <Link className='gm-reaction-button' to="/orderConfirmed">
                    <Button
                        className='gm-reaction-button-link'
                        callback={handleCallback}
                        text={t('gamification.components.modalreaction.mapOrder')} />
                </Link>


            </div>
        </div>


    )
}

ModalReaction.defaultProps = {
    textModal: 'Fantastico! Hai vinto 5 beije coins'
}

export default withTranslation()(ModalReaction)