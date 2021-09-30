import './LayoutBackOffice.css';
import 'antd/dist/antd.css';
import Button from '../../../../common/components/ui/button/Button';
import { Layout } from 'antd';
import Navbar from '../../ui/navbar/Navbar';
import { UserOutlined, ShoppingOutlined, ExclamationCircleOutlined, AppstoreOutlined } from '@ant-design/icons';

const { Content, Sider } = Layout;

const LayoutBackOffice = (props) => {
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
                                <li><span><UserOutlined /></span>Profilo</li>
                                <li><span><AppstoreOutlined /></span>Il tuo Menu</li>
                                <li><span><ShoppingOutlined /></span>Ordini</li>
                                <li><span><ExclamationCircleOutlined /></span>In arrivo</li>
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