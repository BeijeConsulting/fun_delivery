import './IncomingOrders.css';
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import Button from '../../../common/components/ui/button/Button';
import 'antd/dist/antd.css';
import { withTranslation } from 'react-i18next';

const IncomingOrders = (props) => {

    return (
        <>
            <LayoutBackOffice
                pageTitle="IN ARRIVO"
            >
                <div className="bo-io-container">

                    <div className="bo-io-first-row">

                        <div className="bo-io-home">
                            <h2>{t('backoffice.screens.incoming_orders.incoming_orders')}</h2>
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

export default withTranslation()(IncomingOrders)