import React from "react";
import './GenericNotFound.css'
import logoBeije from '../../assets/logo_beijeRosa.png';
import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next';
import { get as _get } from 'lodash';

const GenericNotFound = (props) => {
    console.log("props: ", props)
    const errorFound = _get(props, 'location.state.error', null)
    //fixare e mettere sia location.state.error e location.history error 
    const { t } = props;
    return (
        <div className="generic-not-found">
            <div className="not-found-content">
                <img src={logoBeije} alt="logo-fun-delivery" />
                <h1>Oops!</h1>
                {errorFound === 403 && (
                    <p>403 {t('common.screens.generic_not_found.not_authorized')}</p>
                )}

                {errorFound === 500 && (
                    <p>500 {t('common.screens.generic_not_found.server_error')}</p>
                )}
                {errorFound === null && (
                    <p>404 {t('common.screens.generic_not_found.not_found')}</p>
                )}
                <div>
                    <Link to={'/'}>{t('common.screens.generic_not_found.go_home_page')}</Link>
                </div>
            </div>
        </div>

    )
}

export default withTranslation()(GenericNotFound);