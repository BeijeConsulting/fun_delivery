import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons"
import { faVolumeMute } from "@fortawesome/free-solid-svg-icons"



const AudioButton = (props) => {

    const handleClick = () => {
        props.callback()

    }

    return(
        <div onClick={handleClick}>
            {props.state ? 
                <FontAwesomeIcon icon={faVolumeUp} style={{ fontSize: '25px' }}/>
                 : 
                 <FontAwesomeIcon icon={faVolumeMute} style={{ fontSize: '25px' }}/>
            }
        </div>
    )

}

export default AudioButton