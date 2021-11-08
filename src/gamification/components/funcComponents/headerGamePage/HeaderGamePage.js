import { HistoryOutlined, InfoCircleOutlined } from '@ant-design/icons'
import AudioButton from '../../ui/modalReaction/audioButton/AudioButton'
import './HeaderGamePage.css'
import { Link } from 'react-router-dom'

const HeaderGamePage = (props) => {
    const callbackAudio = () => {
        props.callbackAudioButton()
    }

    return (
        <div className={props.iconContainerCss}>
            <div className={props.infoIconCss}><InfoCircleOutlined style={{ position: "relative", fontSize: '25px' }} />
                <div className='gm-info-message' style={{ position:"absolute", width: '160px', fontSize: '12px', left:"50px" }}>{props.infoMessage}</div>
            </div >
                <AudioButton callback={callbackAudio} state={props.state} />
                
                <Link to='/orderConfirmed'><HistoryOutlined style={{ fontSize: '25px', color:'white' }} /></Link>

        </div >
    )
}

HeaderGamePage.defaultProps = {
    infoIconCss: 'gm-info-icon',
    iconContainerCss: 'gm-header-icons-container'
}

export default HeaderGamePage