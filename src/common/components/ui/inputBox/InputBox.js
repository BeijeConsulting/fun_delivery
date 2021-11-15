import "./InputBox.css";

const InputBox = (props) => {

    const handleCallbackInputBox = (e) => {
        props.callback(e);
    };

    const handleCallbackOnFocus = (e)=> {
        if(props.callbackOnFocus) {
            props.callbackOnFocus(e)
        }
    }

    return (
        <input
            placeholder={props.placeholder}
            name={props.name}
            type={props.type}
            value={props.value}
            onChange={handleCallbackInputBox}
            onFocus={handleCallbackOnFocus}
            className={props.className}
            disabled={props.disable}
            step={props.step}
            max={props.max}
            min={props.min}
        />
    );
}

InputBox.defaultProps = {
    placeholder : '',
    type : 'text' 
}

export default InputBox;
