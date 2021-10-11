import './Button.css';

const Button = (props) => {

    const handleCallbackBtn = (e) => { props.callback(e) }

    return (
        <button style={props.style}className={props.className} onClick={handleCallbackBtn} value={props.value}>
            {props.text}
        </button>
    );
}

Button.defaultProps = {
    text: 'Button'
}
export default Button;