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
                    <h4 className='titleRest'>Nome ristoranteNome ristoranteNome ristoranteNome ristorante</h4>
                    <div className='ratingRest'> 4.9 </div> 
                    </div>
                     {/* Sarà una prop e ci va la valutazione*/}
                    <p>Costo: €1.40 • 35-45 min</p> {/* Saranno props*/}
                    
                </header>
        </article>
    )
}
export default SingleRestaurant;