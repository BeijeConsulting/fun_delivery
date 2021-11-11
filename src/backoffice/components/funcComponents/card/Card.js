import React from 'react'
import './Card.css'
import food from "../../../assets/images/food.jpg";

const Card = (props) => {

    const handleCallbackCard = (e) => {
        return props.callback(e)
    }

    return(
        <div className = {'bo-card-default-constainer'}>
            <div className={`bo-card-container-img-${props.newCss? 'new-plate':''}`} onClick = {handleCallbackCard}>
                <img src={props.img} alt='img'/>
            </div>
            <div className= {`bo-card-title`}>{props.title}</div>
            <h5 className= {`bo-card-status`}>{props.status}</h5>
        </div>
    )
}

Card.defaultProps = {
    title:'Card Title',
    img: food
}

export default Card
