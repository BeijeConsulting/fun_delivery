import "./InputBox.css";

const InputBox = (props) => {

    const handleCallbackInputBox = (e) => {
        props.callback(e);
    };

    const handleCallbackOnBlur = (e) => {
        props.callback(e);
    }

    return (
        <input
            placeholder={props.placeholder}
            name={props.name}
            type={props.type}
            value={props.value}
            onChange={handleCallbackInputBox}
            onChange={handleCallbackOnBlur}
            className={props.className}
        />
    );
}

InputBox.defaultProps = {
    placeholder : '',
    type : 'text' 
}

export default InputBox;
