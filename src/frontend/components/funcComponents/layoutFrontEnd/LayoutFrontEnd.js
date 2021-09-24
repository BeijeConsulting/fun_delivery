import './LayoutFrontEnd.css'

import { BrowserRouter as Switch, Route } from "react-router-dom";

import Landing from "../../../screens/landing/Landing";
import LoginUser from "../../../screens/loginUser/LoginUser";
import RegistrationUser from "../../../screens/registrationUser/RegistrationUser";
import ForgotPassword from "../../../screens/forgotPassword/ForgotPassword";
import UserHome from "../../../screens/userHome/UserHome";
import Restaurants from "../../../screens/restaurants/Restaurants";


import Navbar from '../../ui/navbar/Navbar';

const LayoutFrontEnd = (props) => {
    return (
        <>
            <div>Parte statica Frontend</div>
            <Navbar />

            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/loginUser"  exact component={LoginUser} />
                <Route path="/registrationUser"  exact component={RegistrationUser} />
                <Route path="/forgotPassword"  exact component={ForgotPassword} />
                <Route path="/userHome"  exact component={UserHome} />
                <Route path="/restaurants"  exact component={Restaurants} />
            </Switch>


        </>
    );
}

export default LayoutFrontEnd;