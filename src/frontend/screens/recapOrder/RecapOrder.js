import './RecapOrder.css'
import React from 'react'
import HtmlTag from '../../components/funcComponents/htmlTag/HtmlTag'
import Button from "../../../common/components/ui/button/Button";


class RecapOrder extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (
            <div>
                <HtmlTag
                    tag="h1"
                    text="Grazie per averci scelto!"
                    className='order-title-style'
                />

                <div className="container-list">


                    <div className="list-group">
                        <div className="list-group-item">


                            <HtmlTag
                                tag="h4"
                                text="Pizzeria 'Da Ciro'"
                                className='order-title-style'
                            />
                            <ul className="list-style">
                                <li>Margherita</li>
                                <li>Prezzo: 6,00€</li>
                                <li>Qnt : 1</li>
                            </ul>
                            <ul className="list-style">

                                <li>Diavola</li>
                                <li>Prezzo: 8,00€</li>
                                <li>Qnt : 1</li>
                            </ul>
                            <ul className="list-style">

                                <li>Capricciosa</li>
                                <li>Prezzo: 7,00€</li>
                                <li>Qnt : 1</li>
                            </ul>

                            <p>Totale ordine: 21,00€ </p>

                        </div>

                    </div>
                </div>
                <div className="btn-order-class">
                    <Button
                        text={'Conferma ordine'}
                        className={'order-button1'}
                    />

                    <Button
                        text={'Torna indietro'}
                        className={'order-button2'}
                    />
                </div>

            </div>



        )

    }
}
export default RecapOrder;