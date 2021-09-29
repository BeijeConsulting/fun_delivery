import React from "react";

/* FRONTEND SCREENS */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./frontend/screens/landing/Landing";
import LoginUser from "./frontend/screens/loginUser/LoginUser";
import RegistrationUser from "./frontend/screens/registrationUser/RegistrationUser";
import ForgotPassword from "./frontend/screens/forgotPassword/ForgotPassword";
import UserHome from "./frontend/screens/userHome/UserHome";
import Restaurants from "./frontend/screens/restaurants/Restaurants";
import Navbar from "./frontend/components/ui/navbar/Navbar";

/* BACKOFFICE SCREENS */
import LoginBackOffice from './backoffice/screens/login/Login';
import RegistrationBackOffice from './backoffice/screens/registration/Registration';

const Routing = () => {

    return (
        <Router>
            <Navbar />
            <Switch>
                {/* FRONTEND ROUTES */}
                <Route exact path="/" component={Landing} />
                <Route path="/loginUser" component={LoginUser} />
                <Route path="/registrationUser" component={RegistrationUser} />
                <Route path="/forgotPassword" component={ForgotPassword} />
                <Route path="/userHome" component={UserHome} />
                <Route path="/restaurants" component={Restaurants} />


                {/* BACKOFFICE ROUTES */}
                <Route path="/restaurant/login" component={LoginBackOffice}/>
                <Route path="/restaurant/registration" component={RegistrationBackOffice}/>

                
            </Switch>
        </Router>
    )
}

export default Routing;