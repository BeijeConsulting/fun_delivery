import "./HtmlTag.css"

const HtmlTag = (props) => {
    return (
        <props.tag className={props.htmlTagStyle}>
            {props.text}
        </props.tag>
    );
}

export default HtmlTag;