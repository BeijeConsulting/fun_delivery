import './LayoutBackOffice.css';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import Button from '../../../../common/components/ui/button/Button';
import { Layout } from 'antd';
import Navbar from '../../ui/navbar/Navbar';
import { UserOutlined, ShoppingOutlined, ExclamationCircleOutlined, AppstoreOutlined, DollarCircleOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom'

const { Content, Sider } = Layout;

const LayoutBackOffice = (props) => {

    const pathname = useLocation().pathname;

    return (
        <div className="backoffice-layout">

            <Navbar
                pageTitle={props.pageTitle}
            />
            <Layout>
                <Layout>

                    <Sider
                        style={{ backgroundColor: 'rgba(242, 68, 100, .9)' }}
                        breakpoint="lg"
                        collapsedWidth="0"
                        onBreakpoint={broken => { console.log(broken) }}
                        onCollapse={(collapsed, type) => { console.log(collapsed, type) }}
                    >
                        <div className="backoffice-menu-container">
                            <ul className="backoffice-menu">
                                <li className={pathname === '/restaurant/profile' ? 'active' : ''}><Link to="/restaurant/profile"><span><UserOutlined /></span>Profilo</Link></li>
                                <li className={pathname === '/restaurant/my-menu' ? 'active' : ''}><Link to="/restaurant/my-menu"><span><AppstoreOutlined /></span>Il tuo Menu</Link></li>
                                <li className={pathname === '/restaurant/my-orders' ? 'active' : ''}><Link to="/restaurant/my-orders"><span><ShoppingOutlined /></span>Ordini</Link></li>
                                <li className={pathname === '/restaurant/incoming-orders' ? 'active' : ''}><Link to="/restaurant/incoming-orders"><span><ExclamationCircleOutlined /></span>In arrivo</Link></li>
                                <li className={pathname === '/restaurant/sponsor' ? 'active' : ''}><Link to="/restaurant/sponsor"><span><DollarCircleOutlined /></span>Sponsor</Link></li>
                            </ul>

                            <div className="bo-btn-logout">
                                <Button
                                    className="bo-btn"
                                    text="Logout"

                                />
                            </div>
                        </div>

                    </Sider>
                    <Content className="content-layout">
                        <div className="content">
                            {props.children}
                        </div>
                    </Content>

                </Layout>
            </Layout>
        </div>
    )
}

export default LayoutBackOffice;