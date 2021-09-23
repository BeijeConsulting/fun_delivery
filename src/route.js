import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./frontend/screens/Landing/Landing";
import LoginUser from "./frontend/screens/LoginUser/LoginUser";
import RegistrationUser from "./frontend/screens/RegistrationUser/RegistrationUser";
import ForgotPassword from "./frontend/screens/ForgotPassword/ForgotPassword";
import UserHome from "./frontend/screens/UserHome/UserHome";
import Restaurants from "./frontend/screens/Restaurants/Restaurants";
import Navbar from "./frontend/components/ui/navbar/Navbar";


// Back Office Screens
import { Login as LoginBackOffice } from './backoffice/screens/login/Login' 

function Routing() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/LoginUser" component={LoginUser} />
                <Route path="/RegistrationUser" component={RegistrationUser} />
                <Route path="/ForgotPassword" component={ForgotPassword} />
                <Route path="/UserHome" component={UserHome} />
                <Route path="/Restaurants" component={Restaurants} />

                {/* Back Office Routes */}
                <LoginBackOffice path="/restaurant/login" component={LoginBackOffice}/>

            </Switch>
        </Router>
    )
}

export default Routing;