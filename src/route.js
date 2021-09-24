import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Front End Screens an Layout
import LayoutFrontEnd from "./frontend/components/funcComponents/layoutFrontEnd/LayoutFrontEnd";

// Back Office Screens and Layout
import LayoutBackOffice from './backoffice/components/funcComponents/layoutBackOffice/LayoutBackOffice';

const Routing = () => {
    return (
        <Router>          
            <Switch>
                <Route path="/" component={LayoutFrontEnd}/>
                <Route path="/restaurant" component={LayoutBackOffice}/>                       
            </Switch>
        </Router>
    )
}

export default Routing;