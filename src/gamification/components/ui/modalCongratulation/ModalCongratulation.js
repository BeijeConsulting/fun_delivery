import './ModalCongratulation.css'


const ModalCongratulation = (props) => {

    return (
        <div className='gm-reaction-container'>
                {props.cascadeMoney}
            <p className='gm-reaction-text'>{props.textModal}</p>

        </div>
    )
}

ModalCongratulation.defaultProps = {
    textModal: 'Fantastico! si u chiu fort!'
}

export default ModalCongratulation