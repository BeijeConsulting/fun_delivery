import './Button.css';

const Button = () => {

    handleCallbackBtn = (e) => {
        return props.callback(e.target.value)
    }

    return (
        <button className={props.className} onClick={handleCallbackBtn}>
            {props.label}
        </button>
    );
}

export default Button;