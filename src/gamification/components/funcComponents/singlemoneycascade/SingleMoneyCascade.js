import './SingleMoney.css'


const SingleMoneyCascade = (props) => {
    return (
        <p className='Snowflake' id={`item${props.id}`} style={props.style}>
            <img src={props.src} 
            alt="BeijeCoins"
            style={{width: '30px', height: '30px'}} />
            
        </p>
    )
}

export default SingleMoneyCascade;
