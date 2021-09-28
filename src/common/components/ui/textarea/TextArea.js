import React from 'react'
import './TextArea.css'

const TextArea = (props) => {
    
    const handleTextAreaCallback = (e) => {
        props.callback(e)
    }
    
    return(
        <textarea 
            name={props.name} 
            id={props.id}           
            className={props.className}
            col="4"
            rows="5"
            onChange={handleTextAreaCallback}
        >
            {
                props.value &&
                props.value            
            }
        </textarea>
    )
}

export default TextArea;