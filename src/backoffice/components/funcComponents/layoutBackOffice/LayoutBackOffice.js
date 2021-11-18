import './LayoutBackOffice.css';
import 'antd/dist/antd.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../../common/components/ui/button/Button';
import { Layout } from 'antd';
import Navbar from '../../ui/navbar/Navbar';
import { UserOutlined, ShoppingOutlined, ExclamationCircleOutlined, AppstoreOutlined, DollarCircleOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import properties from '../../../../common/utils/properties';
import { useHistory } from "react-router-dom";
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { initToken } from '../../../../common/redux/duck/tokenDuck';
import { initRestaurantId } from '../../../../common/redux/duck/restaurantIdDuck';
import { useEffect } from 'react';
import { get } from 'lodash';
const { Content, Sider } = Layout;

const LayoutBackOffice = (props) => {

    // To push in login page
    const pathname = useLocation().pathname;
    let history = useHistory();

    useEffect(() => {
        let token = get(props.tokenDuck, 'token', null);
        let restaurantId = get(props.restaurantIdDuck, 'restaurant_id', null)

        if(!token || !restaurantId) {
            return history.push(properties.BO_ROUTING.LOGIN);
        }
    }, [])

    const handleLogout = () => {   
        props.dispatch(initToken());  
        props.dispatch(initRestaurantId());             
        history.push(properties.BO_ROUTING.LOGIN);
    }
    const { t } = props
    return (
        
        <div className="backoffice-layout">

            <Navbar
                pageTitle={props.pageTitle}
            />
            <Layout>

                <Sider
                    style={{ backgroundColor: 'rgba(242, 68, 100, .9)' }}
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => { /*console.log(broken)*/ }}
                    onCollapse={(collapsed, type) => { /*console.log(collapsed, type)*/ }}
                >
                    <nav className="backoffice-menu-container">
                        <ul className="backoffice-menu">
                            <li className={pathname === properties.BO_ROUTING.PROFILE ? 'active' : ''}><Link to={properties.BO_ROUTING.PROFILE}><span><UserOutlined /></span>{t('backoffice.components.sidebar.profile')}</Link></li>
                            <li className={pathname === properties.BO_ROUTING.MY_MENU || pathname === properties.BO_ROUTING.PLATES || pathname === properties.BO_ROUTING.SINGLE_PLATE || pathname === properties.BO_ROUTING.NEW_PLATE ?'active' : ''}><Link to={properties.BO_ROUTING.MY_MENU}><span><AppstoreOutlined /></span>{t('backoffice.components.sidebar.my_menu')}</Link></li>
                            <li className={pathname === properties.BO_ROUTING.MY_ORDERS || pathname === properties.BO_ROUTING.SINGLE_ORDER ? 'active' : ''}><Link to={properties.BO_ROUTING.MY_ORDERS}><span><ShoppingOutlined /></span>{t('backoffice.components.sidebar.my_orders')}</Link></li>
                            <li className={pathname === properties.BO_ROUTING.INCOMING_ORDERS ? 'active' : ''}><Link to={properties.BO_ROUTING.INCOMING_ORDERS}><span><ExclamationCircleOutlined /></span>{t('backoffice.components.sidebar.incoming_orders')}</Link></li>
                            <li className={pathname === properties.BO_ROUTING.SPONSOR ? 'active' : ''}><Link to={properties.BO_ROUTING.SPONSOR}><span><DollarCircleOutlined /></span>Sponsor</Link></li>
                        </ul>

                        <div className="bo-btn-logout">
                            <Button
                                className="bo-btn"
                                text={t('backoffice.components.button.logout')}
                                callback={handleLogout}

                            />
                        </div>
                    </nav>

                </Sider>
                <Content className="content-layout">
                    <main className="content">
                        {props.children}
                    </main>
                </Content>
            </Layout>
        </div>
    )
}

const mapStateToProps = state => ({
    tokenDuck: state.tokenDuck,
    restaurantIdDuck: state.restaurantIdDuck
})

export default connect(mapStateToProps)(withTranslation()(LayoutBackOffice));