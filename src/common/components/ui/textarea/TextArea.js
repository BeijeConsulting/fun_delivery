import React from 'react'
import './TextArea.css'

const TextArea = (props) => {
    
    const handleTextAreaCallback = (e) => {
        props.callback(e)
    }

    const handleTextAreaOnFocus = (e) => {
        if(props.callbackOnFocus) {
            props.callbackOnFocus(e);
        }
    }
    
    return(
        <textarea 
            name={props.name} 
            id={props.id}           
            className={props.className}
            col="4"
            rows="5"
            onChange={handleTextAreaCallback}
            onFocus={handleTextAreaOnFocus}
            placeholder={props.placeholder}
            value={props.value}
            disabled={props.disable}
        />                    
    )
}

export default TextArea;