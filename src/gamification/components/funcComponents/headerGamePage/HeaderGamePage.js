import { HistoryOutlined, InfoCircleOutlined } from '@ant-design/icons'
import AudioButton from '../../ui/modalReaction/audioButton/AudioButton'
import './HeaderGamePage.css'

const HeaderGamePage = (props) => {
    const callbackAudio = () => {
        props.callbackAudioButton()
    }


    return (
        <div className={props.iconContainerCss}>
            <div className={props.infoIconCss}><InfoCircleOutlined style={{ fontSize: '25px' }} />
                <div className='gm-info-message' style={{ width: '160px', fontSize: '12px' }}>{props.infoMessage}</div>
            </div >
            <div>
                <AudioButton callback={callbackAudio} state={props.state} />
                <HistoryOutlined style={{ fontSize: '25px' }} />
            </div>
        </div >
    )
}

HeaderGamePage.defaultProps = {
    infoIconCss: 'gm-info-icon',
    iconContainerCss: 'gm-header-icons-container'
}

export default HeaderGamePage