import './SinglePlateCard.css'
const SinglePlateCard = (props) => {

    const handleCallbackCard = (e) => {
        return props.callback(e)
    }

    return (
        <div className={'bo-card-default-constainer'}>
            <div className={`bo-card-plate-container-img-${props.newCss ? 'new-plate' : ''}`} onClick={handleCallbackCard}>
                <img src={props.img} alt='' />
            </div>
        </div>
    )
}

export default SinglePlateCard