import React from "react";
import './GenericNotFound.css'
import logoBeije from '../../assets/logo_beijeRosa.png';
import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next';
import {get as _get} from 'lodash';

const GenericNotFound = (props) => {
    const errorFound = _get(props, 'history.location.state.error', null)
    const { t } = props;
    console.log(props);
    return(        
        <div className="generic-not-found">
            <div className="not-found-content">
                <img src={logoBeije} alt="logo-fun-delivery" />
                <p>{errorFound===500 ? t('common.screens.generic_not_found.server_error') : t('common.screens.generic_not_found.not_found')}</p>
                <div>
                    <Link to={'/'}>{t('common.screens.generic_not_found.go_home_page')}</Link>
                </div>
            </div>
        </div>
    
    )
}

export default withTranslation()(GenericNotFound);