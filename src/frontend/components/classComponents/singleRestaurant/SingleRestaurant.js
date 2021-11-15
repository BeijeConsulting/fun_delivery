import "./SingleRestaurant.css";

const SingleRestaurant = (props) => {
    const handleClick = (e) => {
        return props.callback(e)
    }
    return (
        <div id={props.restaurantId}onClick={handleClick}>
        <article className={props.classNameWrapper} >
            <picture style={{pointerEvents:'none'}}> 
                <source srcSet={props.image} media={props.media} />
                <img className={props.classNameImage} src={props.altImage} alt={props.altText} />
            </picture>
            <header className='textRest'>
                <div className='wrapRating'>
                    <h4 className='titleRest'>{props.restaurantName}</h4>
                    <div className='ratingRest'> {props.restaurantRating}</div>
                </div>
                <p className='shippingRest'>Consegna: {props.restaurantShipping === false ? "€3.00" : "Gratuita"} • {props.restaurantDeliveryTime}</p> {/* Saranno props*/}

            </header>
        </article>
        </div>
    )
}
export default SingleRestaurant;