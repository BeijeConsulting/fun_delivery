import "./InputBox.css";

const InputBox = () => {

    handleCallbackInputBox = (e) => {
        props.callback(e.target.value);
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
