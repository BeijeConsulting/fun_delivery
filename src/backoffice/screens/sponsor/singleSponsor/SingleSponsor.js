


const SingleSponsor = (props) => {
    const callBackClick = () => {
        props.callbacksponsor()
    }
    return (
        <div className={props.className} value={props.value}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.price}
                <img className={props.coinClass} src={props.srcCoin}></img>
            </p>
            <div style={{ color: props.hourGlass }}>{props.componentFromChild}</div>
            <button className={props.classNameBtn} onClick={callBackClick}>
                {props.label}
            </button>
        </div>
    )
}

export default SingleSponsor;