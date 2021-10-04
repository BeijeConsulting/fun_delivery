import { Component } from "react";
import './Plates.css';
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import Card from "../../components/funcComponents/card/Card"
import 'antd/dist/antd.css';
import { get } from 'lodash';
import { LeftOutlined } from '@ant-design/icons'
// images
import Primi from '../../assets/images/primi.png'
import AddPlate from '../../assets/images/plus.png'
class Plates extends Component {
    constructor(props) {
        super(props)
        this.pageTitle = get(this.props, 'location.state.titlePage', 'Categoria NON specificata');
    }

    handleCallbackGoBack = () => {
        this.props.history.goBack()
    }

    handleCallbackGoNewPlate = ()=>{
        this.props.history.push('/restaurant/new-plate')
    }

    render() {
        return (
            <>
                <LayoutBackOffice
                    pageTitle='LISTA PIATTI'
                >
                    <div className="bo-profile-container">

                        <div className="bo-mymenu-first-row">

                            <div className="bo-mymenu-welcome">
                                <h2>{this.pageTitle}</h2>
                            </div>

                            <div className="bo-mymenu-welcome" onClick={this.handleCallbackGoBack}> <h3><LeftOutlined /></h3> <h3>indietro</h3> </div>
                        </div>

                        <div className="bo-mymenu-form">
                            <div className="bo-mymenu-flex-cards">
                                <Card
                                    title='Nuovo Piatto'
                                    img={AddPlate}
                                    newCss='new-plate'
                                    callback = {this.handleCallbackGoNewPlate}
                                />
                            </div>

                            <div className="bo-mymenu-flex-cards">
                                <Card
                                    title='Pasta al Pesto'
                                    img={Primi}
                                />
                            </div>
                        </div>
                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}

export default Plates