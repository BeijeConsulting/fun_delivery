import './Button.css';

const Button = (props) => {

    const handleCallbackBtn = (e) => {
        return props.callback(e)
    }

    return (
        <button className={props.className} onClick={handleCallbackBtn}>
            {props.text}
        </button>
    );
}

export default Button;