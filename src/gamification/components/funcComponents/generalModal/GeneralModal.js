import "./GeneralModal.css"

const GeneralModal = (props) => {

    return (
        <div className="gm-modal-container">

            <div className={props.classCssModal}>
                <div className='gm-modal-header'>
                    {props.headerModal}
                </div>
                <div className={`${props.contentClass} gm-modal-body`}>
                    {props.contentModal}
                </div>
            </div>
        </div>
    )

}

GeneralModal.defaultProps = {
    classCssModal: 'gm-modal'
}

export default GeneralModal