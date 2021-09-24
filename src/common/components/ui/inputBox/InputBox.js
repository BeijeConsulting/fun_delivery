import "./InputBox.css";

const InputBox = (props) => {

    const handleCallbackInputBox = (e) => {
        props.callback(e);
    };

    return (
        <input
            placeholder={props.placeholder}
            name={props.name}
            type={props.type}
            value={props.value}
            onChange={handleCallbackInputBox}
            className={props.inputClass}
        />
    );
}

export default InputBox;
