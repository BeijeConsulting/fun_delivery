import { HourglassOutlined } from '@ant-design/icons';
import './SingleSponsor.css'

import coin from '../../../../common/assets/BeijeCoin.png'

const SingleSponsor = (props) => {
    const callBackClick = () => {
        props.callbacksponsor()
    }
    return (
        <div style={props.style} className={props.className} value={props.value}>
            <div className={props.durationClass}>
            <h3>{props.title}</h3>
                <div className={props.glassClass}><HourglassOutlined /></div>
            </div>
                <p>{props.description}</p>
            <p className="gm-sponsor-price">{props.price}
                <img className={props.coinClass} src={coin}></img>
            </p>
            <button className={props.classNameBtn} onClick={callBackClick}>
                {props.label}
            </button>
        </div>
    )
}

export default SingleSponsor;