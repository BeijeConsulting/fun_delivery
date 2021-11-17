import "./SinglePlate.css";
import { useState } from 'react'
import Item from "antd/lib/list/Item";


const SinglePlate = (props) => {
  
    const [state,setState] = useState({
        quantity: 0
    })


    const add = (e) => {
        let q = state.quantity + 1
        setState({quantity :  q})

        props.callbackHandler(q, e);
        
    }
    const remove = (e) => {
        let q = state.quantity - 1
        setState({quantity :  q})
        props.callbackHandler(q, e);
    }
  
    return (
        <div className={props.classNameWrapper}>
            <header className='textPlate'>
                <div className='wrapRatingPlate'>
                    <h4 className='titleSinRest'>{props.plateName}</h4>
                    <p className='descriptionPlate'>{props.descriptPlate}</p>
                    <div className='rowButton'>
                        <div className='pricePlate'> {props.platePrice}€</div>
                        <div className='orderSection'>
                            <button 
                                id={props.id}
                                className='buttonAddOrder' 
                                name={props.plateName}
                                value={props.valueId}
                                operator={'+'} 
                                onClick={add} >+
                            </button>
                            <p className='counterOrder'>{state.quantity}</p>
                            <button 
                                className='buttonRemoveOrder' 
                                operator={'-'} 
                                id={props.idKey}
                                onClick={remove} 
                                name={props.plateName}
                                value={props.valueId} >-
                            </button>
                        </div>
                    </div>
                </div>
                <picture>
                    <source srcSet={props.image} media={props.media} />
                    <img className={props.classNameImage} src={props.altImage} alt={props.altText} />
                </picture>
                {/* Sarà una prop e ci va la valutazione*/}
            </header>
        </div>
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
