import { Component } from "react";
import './IncomingOrders.css';
import LogoBeije from '../../assets/images/logo_beijeRosa.png';
import InputBox from "../../../common/components/ui/inputBox/InputBox";
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import { EditOutlined, EditFilled, DollarCircleOutlined, LeftOutlined } from '@ant-design/icons';
import Select from "../../../common/components/ui/select/Select";
import TextArea from "../../../common/components/ui/textarea/TextArea";
import SwitchProfile from "../../components/ui/switch/SwitchProfile";
import Button from '../../../common/components/ui/button/Button';
import 'antd/dist/antd.css';

class IncomingOrders extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <LayoutBackOffice
                    pageTitle="IN ARRIVO"
                >
                    <div className="bo-io-container">

                        <div className="bo-io-first-row">

                            <div className="bo-io-home">
                                <h2>Ordini in arrivo</h2>
                                {/* <span className="bo-icon-edit"><LeftOutlined />Indietro</span> */}
                            </div>
                        </div>

                        {/* INIZIO SINGOLO ORDINE */}
                        <div className="bo-io-form">

                            <h3 className="bo-io-h2">Utente ha ordinato da te...</h3>
                            <div className="bo-btn-view">
                                <Button
                                    className="bo-btn-incoming-order"
                                    text="Visualizza"
                                />
                            </div>
                            
                        </div>
                        {/* FINE SINGOLO ORDINE */}
                        
                        <div className="bo-io-form">

                            <h3 className="bo-io-h2">Utente ha ordinato da te...</h3>
                            <div className="bo-btn-view">
                                <Button
                                    className="bo-btn-incoming-order"
                                    text="Visualizza"
                                />
                            </div>
                            
                        </div>
                        <div className="bo-io-form">

                            <h3 className="bo-io-h2">Utente ha ordinato da te...</h3>
                            <div className="bo-btn-view">
                                <Button
                                    className="bo-btn-incoming-order"
                                    text="Visualizza"
                                />
                            </div>
                            
                        </div>
                        <div className="bo-io-form">

                            <h3 className="bo-io-h2">Utente ha ordinato da te...</h3>
                            <div className="bo-btn-view">
                                <Button
                                    className="bo-btn-incoming-order"
                                    text="Visualizza"
                                />
                            </div>
                            
                        </div>
                        <div className="bo-io-form">

                            <h3 className="bo-io-h2">Utente ha ordinato da te...</h3>
                            <div className="bo-btn-view">
                                <Button
                                    className="bo-btn-incoming-order"
                                    text="Visualizza"
                                />
                            </div>
                            
                        </div>


                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}

export default IncomingOrders