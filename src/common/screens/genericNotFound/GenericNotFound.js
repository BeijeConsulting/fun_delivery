import React from "react";
import './GenericNotFound.css'
import logoBeije from '../../assets/logo_beijeRosa.png';
import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next';
import { get as _get } from 'lodash';

const GenericNotFound = (props) => {
    console.log("history: ", props.location.state)
    const errorFound = _get(props, 'location.state.error', null)
    const { t } = props;
    console.log("errorFound", errorFound)
    return (
        <div className="generic-not-found">
            <div className="not-found-content">
                <img src={logoBeije} alt="logo-fun-delivery" />
                {errorFound === 403 && (
                    <p>{t('common.screens.generic_not_found.not_authorized')}</p>
                )}

                {errorFound === 500 && (
                    <p>{t('common.screens.generic_not_found.server_error')}</p>
                )}
                {errorFound === 404 && (
                    <p>{t('common.screens.generic_not_found.not_found')}</p>
                )}
                <div>
                    <Link to={'/'}>{t('common.screens.generic_not_found.go_home_page')}</Link>
                </div>
            </div>
        </div>

    )
}

export default withTranslation()(GenericNotFound);