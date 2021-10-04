import './ModalReaction.css'

import Button from '../../../../common/components/ui/button/Button'

const ModalReaction = (props) => {

    const handleCallback = () =>{
        props.callback()
    }
    return (
        <div className='gm-reaction-container'>
        
            <p className='gm-reaction-text'>{props.textModal}</p>
            <Button
                className='gm-reaction-button'
                callback={handleCallback}
                text={'Gioca di nuovo'} />
            <Button
                className='gm-reaction-button'
                callback={handleCallback}
                text={'Cambia gioco'} />
            <Button
                className='gm-reaction-button'
                callback={handleCallback}
                text={'Vedi stato ordinazione'} />
        </div>
    )
}

ModalReaction.defaultProps = {
    textModal: 'Fantastico! Hai vinto 5 beije coins'
}

export default ModalReaction