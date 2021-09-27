import { Component } from "react";
import './Profile.css';
import LogoBeije from '../../../common/assets/LogoSvgRosa.svg';
import InputBox from "../../../common/components/ui/inputBox/InputBox";
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import { EditOutlined, EditFilled } from '@ant-design/icons';
import 'antd/dist/antd.css';

class Profile extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>

                <LayoutBackOffice
                    pageTitle="PROFILE"
                >
                    <div className="bo-profile-form">
                        <div className="bo-profile-first-row">
                            <div className="bo-profile-welcome">
                                <h2>Benvenuto, Admin <span><EditFilled /></span></h2>
                            </div>
                            <div className="bo-profile-img">
                                <img src={LogoBeije} alt="" />
                            </div>
                        </div>


                        <div className="bo-profile-form">
                            <div className="bo-profile-flex-inputs">
                                <InputBox
                                    type="text"
                                    placeholder="Nome"
                                    inputClass="bo-input-box"
                                />
                                <InputBox
                                    type="text"
                                    placeholder="Cognome"
                                    inputClass="bo-input-box"
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