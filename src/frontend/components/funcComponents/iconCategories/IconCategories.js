const IconCategories = (props) => {

    const handleClick = (e) => {
        return props.callback(e)
    }

    return (
        <button className={'icon'} onClick={handleClick} value={props.value}>
            <img src={props.icon} style={ { width: '55%' , pointerEvents: "none"} } alt={props.altText} />
            {props.label}
            
        </button>
    );
}

IconCategories.defaultProps = {
    altText : 'Icon'
}
export default IconCategories;