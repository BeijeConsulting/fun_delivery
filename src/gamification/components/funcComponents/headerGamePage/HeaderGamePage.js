import { HistoryOutlined, InfoCircleOutlined } from '@ant-design/icons'
import './HeaderGamePage.css'

const HeaderGamePage = (props) => {
    return (
        <div className= {props.iconContainerCss}>
            <div className={props.infoIconCss}><InfoCircleOutlined style={{ fontSize: '25px' }} />
                <div className='gm-info-message' style={{width: '160px', fontSize: '12px'}}>{props.infoMessage}</div>
            </div >
            <HistoryOutlined style={{ fontSize: '25px' }} />
        </div >
    )
}

HeaderGamePage.defaultProps = {
    infoIconCss: 'gm-info-icon',
    iconContainerCss: 'gm-header-icons-container'
}

export default HeaderGamePage