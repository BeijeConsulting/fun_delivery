import './LayoutBackOffice.css';

import { BrowserRouter as Switch, Route } from "react-router-dom";

import LoginBackOffice from '../../../screens/login/Login';
import ForgotPassword from '../../../screens/forgotPassword/ForgotPassword';
import Registration from '../../../screens/registration/Registration';


const LayoutBackOffice = (props) => {
    return (
        <>
            <div>Parte statica BackOffice</div>     
            <Switch>
                <Route path="/restaurant/login" exact component={LoginBackOffice} />     
                <Route path="/restaurant/registration" exact component={Registration} /> 
                <Route path="/restaurant/forgot-password" exact component={ForgotPassword} /> 
            </Switch>

        </>
        
    )
}

export default LayoutBackOffice;