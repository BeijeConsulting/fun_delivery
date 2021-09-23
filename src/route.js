import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./frontend/screens/landing/Landing";
import LoginUser from "./frontend/screens/loginUser/LoginUser";
import RegistrationUser from "./frontend/screens/registrationUser/RegistrationUser";
import ForgotPassword from "./frontend/screens/forgotPassword/ForgotPassword";
import UserHome from "./frontend/screens/userHome/UserHome";
import Restaurants from "./frontend/screens/restaurants/Restaurants";
import Navbar from "./frontend/components/ui/navbar/Navbar";
const Routing = () => {
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
            </Switch>
        </Router>
    )
}

export default Routing;