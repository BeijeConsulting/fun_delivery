import './SinglePlateCard.css'
const SinglePlateCard = (props) => {

    const handleCallbackCard = (e) => {
        return props.callback(e)
    }

    return (
        <div
            className={'bo-card-default-constainer'}            
        >

            <div
                className={`bo-card-plate-container-img-${props.newCss}`}
               
            >

                <label htmlFor="upload-img"
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                    }}
                >
                    <img src={props.img} alt='' />
                </label>

                <input
                    type="file"
                    style={{
                        position: 'absolute',
                        display: 'none',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        height: '100%',
                        width: '100%'
                    }}
                    id="upload-img"
                    name = {props.name}
                    onChange={handleCallbackCard}
                    disabled={props.disable}
                />

            </div>



        </div>
    )
}

export default SinglePlateCard