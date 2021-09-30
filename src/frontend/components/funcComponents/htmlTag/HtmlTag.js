import "./HtmlTag.css"

const HtmlTag = (props) => {
    return (
        <props.tag className={props.className}>
            {props.text}
        </props.tag>
    );
}

export default HtmlTag;