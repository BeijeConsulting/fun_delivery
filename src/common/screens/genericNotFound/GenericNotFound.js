import React from "react";
import './GenericNotFound.css'
import logoBeije from '../../assets/logo_beijeRosa.png';
import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next';

const GenericNotFound = (props) => {

    const { t } = props;

    return(
        <div className="generic-not-found">
            <div className="not-found-content">
                <img src={logoBeije} alt="logo-fun-delivery" />
                <p>{t('common.screens.generic_not_found.not_found')}</p>
                <div>
                    <Link to={'/'}>{t('common.screens.generic_not_found.go_home_page')}</Link>
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(GenericNotFound);