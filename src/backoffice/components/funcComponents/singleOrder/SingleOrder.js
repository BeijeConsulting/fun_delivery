import Button from '../../../../common/components/ui/button/Button';

const SingleOrder = (props) => {

    const handleButton = (e) => {
        return props.callbackRedirect(e)
    }
    
    return (
        <div className="bo-io-form">
            <h3 className="bo-io-h2">{props.user} {props.ordered_text}</h3>
            <div className="bo-btn-view">
                <Button
                    className="bo-btn-incoming-order"
                    text={props.button_text}
                    callback={handleButton}
                />
            </div>
        </div>
    )
}

export default SingleOrder;