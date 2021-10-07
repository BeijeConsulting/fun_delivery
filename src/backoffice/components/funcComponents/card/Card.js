import './Card.css'

const Card = (props) => {

    const handleCallbackCard = (e) => {
        return props.callback(e)
    }

    return(
        <div className = {'bo-card-default-constainer'}>
            <div className={`bo-card-container-img-${props.newCss? 'new-plate':''}`} onClick = {handleCallbackCard}>
                <img src={props.img} alt='status order'/>
            </div>
            <div className= {`bo-card-title`}>{props.title}</div>
            <h5 className= {`bo-card-status`}>{props.status}</h5>
        </div>
    )
}

Card.defaultProps = {
    title:'Card Title'
}

export default Card
