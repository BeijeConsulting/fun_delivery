import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./frontend/screens/Landing/Landing";
import LoginUser from "./frontend/screens/LoginUser/LoginUser";
import RegistrationUser from "./frontend/screens/RegistrationUser/RegistrationUser";

function Routing() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/LoginUser" component={LoginUser} />
                <Route path="/RegistrationUser" component={RegistrationUser} />
            </Switch>
        </Router>
    )
}

export default Routing;