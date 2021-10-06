import "./SingleRestaurant.css";

const SingleRestaurant = (props) => {
    return (
        <article className={props.classNameWrapper}>
            <picture>
                <source srcSet={props.image} media={props.media}/>
                <img className={props.classNameImage} src={props.altImage} alt={props.altText} />
            </picture>
                <header className='textRest'>
                    <div className='wrapRating'>
                    <h4 className='titleRest'>{props.restaurantName}</h4>
                    <div className='ratingRest'> {props.restaurantRating}</div> 
                    </div>
                     {/* Sarà una prop e ci va la valutazione*/}
                    <p className='shippingRest'>Consegna: {props.restaurantShipping===0 ? "€3.00" : "Gratuita"} • {props.restaurantDeliveryTime}</p> {/* Saranno props*/}
                    
                </header>
        </article>
    )
}
export default SingleRestaurant;