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
import Quiz from "./gamification/screens/quiz/Quiz";

import properties from "./common/utils/properties";

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
                <Route path={properties.BO_ROUTING.LOGIN} component={LoginBackOffice}/>
                <Route path={properties.BO_ROUTING.REGISTRATION} component={RegistrationBackOffice}/>
                <Route path={properties.BO_ROUTING.FORGOT_PSW} component={ForgotPasswordBackOffice}/>
                <Route path={properties.BO_ROUTING.PROFILE} component={RestaurantProfile}/>
                <Route path={properties.BO_ROUTING.MY_MENU} component={MyMenu}/>
                <Route exact path={properties.BO_ROUTING.PLATES} component={RestaurantPlates}/>
                <Route path={properties.BO_ROUTING.SINGLE_PLATE} component={RestaurantSinglePlate}/>
                <Route path={properties.BO_ROUTING.NEW_PLATE} component={RestaurantNewPlate}/>                
                <Route exact path={properties.BO_ROUTING.MY_ORDERS} component={RestaurantOrders}/>
                <Route path={properties.BO_ROUTING.SINGLE_ORDER} component={RestaurantSingleOrder}/>                                
                <Route path={properties.BO_ROUTING.INCOMING_ORDERS} component={RestaurantIncomingOrders}/>
                <Route path={properties.BO_ROUTING.SPONSOR} component={RestaurantSponsor}/>                               

                {/* GAMIFICATION ROUTES */}
                <Route path="/quiz" component={Quiz}/>

                
            </Switch>
        </Router>
    )
}

export default Routing;