import "./SinglePlate.css";
import { useState } from 'react'


const SinglePlate = ( props ) =>
{

    //HOOK


    const [ state, setState ] = useState( {
        order: null,
        orders: [],
        counter: 0,
        cartCounter: 0

    } )
localStorage.setItem( 'singlePlate', JSON.stringify( state.orders ) )
    function addProduct ( e )
    {
        
        let orderBy = [ ...state.orders ]
        orderBy.push(e.target.value)

        setState( {
            ...state,
            order: orderBy,
            counter: state.counter + 1,
            cartCounter: state.counter + 1,
            orders: orderBy
        } )

        let mapOrder = [state.order]
        mapOrder.map((item, index) => {
            console.log(item, index)
        })
        
        // console.log( state.order )
        console.log( orderBy + 'order', mapOrder )
    }
    function removeProduct ( e )
    {

        let orderBy = [ ...state.orders ]
        orderBy.pop()
        if ( state.counter > 0 )
        {
            setState( {
                ...state,
                order : orderBy,
                counter: state.counter - 1,
                cartCounter: state.counter -1,
                orders: orderBy
            } )
        }
        localStorage.removeItem('singlePlate')


        // console.log( state.order )
        console.log( orderBy )
    }

    






    

    









    return (
        <article className={ props.classNameWrapper }>
            <header className='textPlate'>
                <div className='wrapRatingPlate'>
                    <h4 className='titleSinRest'>{ props.plateName }</h4>
                    <p className='descriptionPlate'>{ props.descriptPlate }</p>
                    <div className='rowButton'>
                        <div className='pricePlate'> { props.platePrice }</div>
                        <div className='orderSection'>
                            <button className='buttonAddOrder' value={ props.plateName + ' ' + parseInt( props.platePrice ) + '€' } onClick={ addProduct } >+</button>
                            <p className='counterOrder'>{ state.counter }</p>
                            <button className='buttonRemoveOrder' onClick={ removeProduct } value={ props.plateName + ' ' + parseInt( props.platePrice ) + '€' }  >-</button>
                        </div>
                    </div>
                </div>
                <picture>
                    <source srcSet={ props.image } media={ props.media } />
                    <img className={ props.classNameImage } src={ props.altImage } alt={ props.altText } />
                </picture>
                {/* Sarà una prop e ci va la valutazione*/ }



            </header>
        </article>
    )
}
export default SinglePlate;