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
import RecapOrder from "./frontend/screens/recapOrder/RecapOrder";
import OrderConfirmed from "./frontend/screens/orderConfirmed/OrderConfirmed";

import MenuRestaurant from "./frontend/screens/menuRestaurant/MenuRestaurant";

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


// GAMIFICATION SCREENS
import Quiz from "./gamification/screens/quiz/Quiz";
import Memory from './gamification/screens/memory/Memory'


import properties from "./common/utils/properties";
import ApplicationStore from "./ApplicationStore";
import { Provider } from "react-redux";

const Routing = () => {

    return (
        <Provider store={ApplicationStore}>
            <Router>
                <Switch>
                </Switch>
                {/* <Navbar /> */}
                <Switch>
                    {/* FRONTEND ROUTES */}
                    <Route exact path="/" component={Landing} />
                    <Route path="/loginUser" component={LoginUser} />
                    <Route path="/registrationUser" component={RegistrationUser} />
                    <Route path="/forgotPassword" component={ForgotPassword} />
                    <Route path="/restaurants" component={Restaurants} />
                    <Route exact path="/userHome" component={UserHome} />
                    <Route path="/recapOrder" component={RecapOrder} />
                    <Route path="/menuRestaurant" component={MenuRestaurant} />
                    <Route path="/orderConfirmed" component={OrderConfirmed} />


                    {/* BACKOFFICE ROUTES */}
                    <Route path={properties.BO_ROUTING.LOGIN} component={LoginBackOffice} />
                    <Route path={properties.BO_ROUTING.REGISTRATION} component={RegistrationBackOffice} />
                    <Route path={properties.BO_ROUTING.FORGOT_PSW} component={ForgotPasswordBackOffice} />
                    <Route path={properties.BO_ROUTING.PROFILE} component={RestaurantProfile} />
                    <Route path={properties.BO_ROUTING.MY_MENU} component={MyMenu} />
                    <Route exact path={properties.BO_ROUTING.PLATES} component={RestaurantPlates} />
                    <Route path={properties.BO_ROUTING.SINGLE_PLATE} component={RestaurantSinglePlate} />
                    <Route path={properties.BO_ROUTING.NEW_PLATE} component={RestaurantNewPlate} />
                    <Route exact path={properties.BO_ROUTING.MY_ORDERS} component={RestaurantOrders} />
                    <Route path={properties.BO_ROUTING.SINGLE_ORDER} component={RestaurantSingleOrder} />
                    <Route path={properties.BO_ROUTING.INCOMING_ORDERS} component={RestaurantIncomingOrders} />
                    <Route path={properties.BO_ROUTING.SPONSOR} component={RestaurantSponsor} />

                    {/* GAMIFICATION ROUTES */}
                    <Route path="/quiz" component={Quiz} />
                    <Route path="/memory" component={Memory} />


                </Switch>
            </Router>
        </Provider>
    )
}

export default Routing;