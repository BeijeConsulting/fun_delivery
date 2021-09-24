import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// Front End Screens an Layout
import LayoutFrontEnd from "./frontend/components/funcComponents/layoutFrontEnd/LayoutFrontEnd";

// Back Office Screens and Layout
import LayoutBackOffice from './backoffice/components/funcComponents/layoutBackOffice/LayoutBackOffice';

import { Login as LoginBackOffice } from './backoffice/screens/login/Login';

const Routing = () => {
    return (
        <Router>

            {/* Front End Routes */}

            <Switch>
                <Route exact path="/" component={LayoutFrontEnd} />
                <Route path="/restaurant/login" component={LoginBackOffice} />
            </Switch>





            {/* Back Office Routes */}




        </Router>
    )
}

export default Routing;