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
import UserMissions from "./frontend/screens/userMissions/UserMissions";


/* BACKOFFICE SCREENS */
import LoginBackOffice from './backoffice/screens/login/Login';
import RegistrationBackOffice from './backoffice/screens/registration/Registration';
import ForgotPasswordBackOffice from './backoffice/screens/forgotPassword/ForgotPassword';
import RestaurantProfile from './backoffice/screens/profile/Profile';
import MyMenu from './backoffice/screens/myMenu/MyMenu';
import RestaurantPlates from './backoffice/screens/plates/Plates';
import RestaurantNewPlate from './backoffice/screens/newPlate/NewPlate';
import RestaurantSinglePlate from './backoffice/screens/singlePlate/SinglePlate';
import RestaurantOrders from './backoffice/screens/myOrders/MyOrders';
import RestaurantSingleOrder from './backoffice/screens/singleOrder/SingleOrder';
import RestaurantIncomingOrders from './backoffice/screens/incomingOrders/IncomingOrders';
import RestaurantSponsor from './backoffice/screens/sponsor/Sponsor';

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
                <Route path="/restaurants" component={Restaurants} />
                <Route exact path="/userHome" component={UserHome} />
                <Route exact path='/userHome/userMissions' component={UserMissions} />

                {/* BACKOFFICE ROUTES */}
                <Route path="/restaurant/login" component={LoginBackOffice}/>
                <Route path="/restaurant/registration" component={RegistrationBackOffice}/>
                <Route path="/restaurant/forgot-password" component={ForgotPasswordBackOffice}/>
                <Route path="/restaurant/profile" component={RestaurantProfile}/>
                <Route path="/restaurant/my-menu" component={MyMenu}/>
                <Route exact path="/restaurant/plates" component={RestaurantPlates}/>
                <Route path="/restaurant/plates/:plate_id" component={RestaurantSinglePlate}/>
                <Route path="/restaurant/new-plate" component={RestaurantNewPlate}/>                
                <Route path="/restaurant/my-orders" component={RestaurantOrders}/>
                <Route path="/restaurant/my-orders/:order_id" component={RestaurantSingleOrder}/>                                
                <Route path="/restaurant/incoming-orders" component={RestaurantIncomingOrders}/>
                <Route path="/restaurant/sponsor" component={RestaurantSponsor}/>                               
            </Switch>
        </Router>
    )
}

export default Routing;