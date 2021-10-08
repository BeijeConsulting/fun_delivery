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
                <FontAwesomeIcon icon={faVolumeUp} />
                 : 
                 <FontAwesomeIcon icon={faVolumeMute} />
            }
        </div>
    )

}

export default AudioButton