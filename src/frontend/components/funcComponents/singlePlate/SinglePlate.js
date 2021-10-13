import "./SinglePlate.css";
import { useState } from 'react'


const SinglePlate = (props) => {

    const callbackHandler = (quantity) => {
        let obj =
        {
            'name': props.plateName,
            'price': props.platePrice,
            'quantity': quantity
        }  

        return props.callback(obj)
    }

    let quantity = 0;

    const add = () => {
        quantity ++;
        callbackHandler(quantity)
    }

    const remove = () => {
        if(quantity == 0) return 
        quantity --;
        callbackHandler(quantity)
    }


    return (
        <article className={props.classNameWrapper}>
            <header className='textPlate'>
                <div className='wrapRatingPlate'>
                    <h4 className='titleSinRest'>{props.plateName}</h4>
                    <p className='descriptionPlate'>{props.descriptPlate}</p>
                    <div className='rowButton'>
                        <div className='pricePlate'> {props.platePrice}</div>
                        <div className='orderSection'>
                            <button className='buttonAddOrder' value={props.plateName + ' ' + parseInt(props.platePrice) + '€'} onClick={add} >+</button>
                            {/* <p className='counterOrder'>{counter}</p> */}
                            {<button className='buttonRemoveOrder' onClick={remove} value={props.plateName + ' ' + parseInt(props.platePrice) + '€'}  >-</button>}
                        </div>
                    </div>
                </div>
                <picture>
                    <source srcSet={props.image} media={props.media} />
                    <img className={props.classNameImage} src={props.altImage} alt={props.altText} />
                </picture>
                {/* Sarà una prop e ci va la valutazione*/}



            </header>
        </article>
    )
}
export default SinglePlate;
















    // let [orders, setOrders] = useState([]);
    // let count = 0

    // const addProduct = () => {

    //     count = count + 1


    //     let orderTemp = orders

    //     orderTemp.push(
    //         {
    //             name: props.plateName,
    //             price: props.platePrice,
    //             quantity: count
    //         }
    //     )

    //     setOrders(orderTemp)
    //     localStorage.setItem('Order', JSON.stringify(orderTemp));
    // }
