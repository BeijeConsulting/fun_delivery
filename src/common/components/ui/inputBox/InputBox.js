import "./InputBox.css";

const InputBox = (props) => {

    const handleCallbackInputBox = (e) => {
        props.callback(e.target.value);
    };

    return (
        <input
            placeholder={props.placeholder}
            name={props.name}
            type={props.type}
            value={props.value}
            onChange={handleCallbackInputBox}
            className={props.className}
        />
    );
}

InputBox.defaultProps = {
    placeholder : '',
    type : 'text' 
}

export default InputBox;
