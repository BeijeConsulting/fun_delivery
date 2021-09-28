import React from 'react'
import './TextArea.css'

const TextArea = (props) => {
    return(
        <textarea 
            name={props.name} 
            id={props.id}           
            className={props.className}
            col="4"
            rows="5"
        >
            {
                props.value &&
                props.value            
            }
        </textarea>
    )
}

export default TextArea;