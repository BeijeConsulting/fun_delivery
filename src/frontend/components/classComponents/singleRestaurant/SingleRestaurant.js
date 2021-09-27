import "./SingleRestaurant.css";

const SingleRestaurant = (props) => {
    return (
        <article className={props.classNameWrapper}>
            <picture>
                <source srcset={props.image} media={props.media}/>
                <img className={props.classNameImage} src={props.altImage} alt={props.altText} />
            </picture>
                <header>
                    <h4>Nome ristoranteNome ristoranteNome ristoranteNome ristorante</h4> {/* Sarà una prop e ci va la valutazione*/}
                    <p>Costo: €1.40 • 35-45 min</p> {/* Saranno props*/}
                </header>
        </article>
    )
}
export default SingleRestaurant;