import './ModalReaction.css'

import Button from '../../../../common/components/ui/button/Button'
import { withTranslation } from 'react-i18next'
const ModalReaction = (props) => {

    const handleCallback = () => {
        props.callback()
    }
    const {t} = props;
    return (
        <div className='gm-reaction-container'>
                {/* <div className="gm-cascade" > */}
                    {props.cascadeMoney}

            <p className='gm-reaction-text'>{props.textModal}</p>
            <div className='gm-reaction-container-button'>
                <Button
                    className='gm-reaction-button'
                    callback={handleCallback}
                    text={t('gamification.components.modalreaction.playagain')} />
                <Button
                    className='gm-reaction-button'
                    callback={handleCallback}
                    text={t('gamification.components.modalreaction.changegame')} />
                <Button
                    className='gm-reaction-button'
                    callback={handleCallback}
                    text={t('gamification.components.modalreaction.mapOrder')} />
            </div>
                    {/* </div> */}
        </div>
    )
}

ModalReaction.defaultProps = {
    textModal: 'Fantastico! Hai vinto 5 beije coins'
}

export default withTranslation()(ModalReaction)