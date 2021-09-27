import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Button } from 'antd';
import { UnorderedListOutlined, UserOutlined, ShoppingOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
const { Header, Content, Sider } = Layout;

export default function Sidebar() {
    return (
        <>
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => { console.log(broken) }}
                    onCollapse={(collapsed, type) => { console.log(collapsed, type) }}
                >
                    <br />
                    <br />
                    <br />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            Profilo
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UnorderedListOutlined />}>
                            Il tuo menù
                        </Menu.Item>
                        <Menu.Item key="3" icon={<ShoppingOutlined />}>
                            Ordini
                        </Menu.Item>
                        <Menu.Item key="4" icon={<ExclamationCircleOutlined />}>
                            In arrivo
                        </Menu.Item>
                    </Menu>

                    <Layout>
                        <Button type="primary" shape="round" size={"Default"}>Logout</Button>
                    </Layout>

                </Sider>
                <Layout>
                    <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            content
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}
