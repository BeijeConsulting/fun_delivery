import { Component } from "react";
import './MyOrders.css';
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import Card from "../../components/funcComponents/card/Card"
import Select from "../../../common/components/ui/select/Select"
import confirm from '../../assets/images/confirm.png'
import delivering from '../../assets/images/truck.svg'
import in_progress from '../../assets/images/in_progress.png'
import 'antd/dist/antd.css';

class Profile extends Component {

    handleCallbackPageSingleOrder = () => {
        this.props.history.push('/restaurant/my-orders/'+1, {
            titlePage: 'PRIMI'
        })
    }

    render() {
        return (
            <>
                <LayoutBackOffice
                    pageTitle="MY ORDERS"
                >
                    <div className="bo-order-container">
                        <div className="bo-order-first-row">

                            <div className="bo-order-welcome">
                                <h2>I tuoi ordini</h2>
                            </div>
                           <Select
                                selectID="state"
                                selectName="state"
                                data={['Tutti', 'Completati', 'In Consegna', 'In Preparazione']}
                                className="bo-select-order"
                            />  
                        </div>
                        <div className="bo-order-form">

                            <div className="bo-order-flex-cards">
                                <Card
                                    title='Ordine #000'
                                    img={confirm}
                                    callback={this.handleCallbackPageSingleOrder}
                                    status = {'🟢 confermato'}
                                />
                            </div>
                            <div className="bo-order-flex-cards">
                                <Card
                                    title='Ordine #001'
                                    img={delivering}
                                    callback={this.handleCallbackPageSingleOrder}
                                    status = {'🔵 in arrivo'}
                                />
                            </div>
                            <div className="bo-order-flex-cards">
                                <Card
                                    title='Ordine #002'
                                    img={in_progress}
                                    callback={this.handleCallbackPageSingleOrder}
                                    status = {'🟡 in preparazione'}
                                />
                            </div>
                        </div>



                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}

export default Profile