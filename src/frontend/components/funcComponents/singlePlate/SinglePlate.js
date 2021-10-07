import "./SinglePlate.css";
import { useState } from 'react'


const SinglePlate = ( props ) =>
{

    //HOOK
    const [ isClick, setisClick ] = useState( false );




    const view = () =>
    {
        setisClick( isClick ? false : true )
        console.log( isClick )
    }






    return (
        <article className={ props.classNameWrapper }>
            <header className='textPlate'>
                <div className='wrapRatingPlate'>
                    <h4 className='titleSinRest'>{ props.plateName }</h4>
                    <p className='descriptionPlate'>{props.descriptPlate}</p>
                    <div className='rowButton'>
                        <div className='pricePlate'> { props.platePrice }</div>
                        <button className='buttonAddOrder' onClick={ view }>Add to</button>
                    </div>
                </div>
                <picture>
                    <source srcSet={ props.image } media={ props.media } />
                    <img className={ props.classNameImage } src={ props.altImage } alt={ props.altText } />
                </picture>
                {/* Sarà una prop e ci va la valutazione*/ }

                { isClick &&
                    <p>Ciao</p>
                }


            </header>
        </article>
    )
}
export default SinglePlate;