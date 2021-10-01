import './SinglePlateCard.css'
import InputBox from '../../../../common/components/ui/inputBox/InputBox'
import Select from "../../../../common/components/ui/select/Select";
import TextArea from '../../../../common/components/ui/textarea/TextArea';
const SinglePlateCard = (props) => {

    const handleCallbackCard = (e) => {
        return props.callback(e)
    }

    return (
        <div className={'bo-card-default-constainer'}>
            <div className={`bo-card-plate-container-img-${props.newCss ? 'new-plate' : ''}`} onClick={handleCallbackCard}>
                <img src={props.img} alt='' />
            </div>

            <div className="bo-card-plate-flex-inputs">
                <InputBox
                    type="text"
                    placeholder="Nome piatto"
                    className="bo-input-box"
                    name="plate"

                />

                <InputBox
                    type="text"
                    placeholder="Prezzo € "
                    className="bo-input-box"
                    name="price"

                />
            </div>
            <Select
                data={props.Categories}
                selectID='categories'
                selectName='restaurant_category'
                className='bo-input-box'
            //className={`bo-input-box ${this.state.warnings.restaurant_category ? 'alert' : ''}`}
            />

            <TextArea
                name="description"
                className="bo-input-box"
                id="description_plate"
                value="Descrizione Piatto"
            //disable={!this.state.editData}
            />
        </div>
    )
}

export default SinglePlateCard