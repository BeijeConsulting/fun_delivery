import "./GeneralModal.css"
import closeIcon from "../../../assets/images/close-icon.svg"

const GeneralModal = (props) => {
    const onClickCloseWindow = () => {
        props.callbackClose()
    }

    return (
        <div className="gm-modal-container">

            <div className={props.classCssModal}>
                <div className='gm-modal-header'>
                    <img
                        src={closeIcon}
                        alt='close modal icon'
                        onClick={onClickCloseWindow}
                        className="gm-modal-close" />
                    <div />
                </div>
                <div className="gm-modal-body">
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