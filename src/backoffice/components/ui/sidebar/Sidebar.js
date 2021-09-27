import React from 'react';
import './Sidebar.css';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Button } from 'antd';
import { UnorderedListOutlined, UserOutlined, ShoppingOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
const { Header, Content, Sider } = Layout;



export default function Sidebar() {
    return (
        <>
            {/* <Layout className="back-office-layout">
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => { console.log(broken) }}
                    onCollapse={(collapsed, type) => { console.log(collapsed, type) }}
                >
                    <br />
                    <br />
                    <br />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} style={{backgroundColor: '#F24464d9'}}>
                        <Menu.Item key="1" icon={<UserOutlined />} >
                            Profilo
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UnorderedListOutlined />} >
                            Il tuo menù
                        </Menu.Item>
                        <Menu.Item key="3" icon={<ShoppingOutlined />} >
                            Ordini
                        </Menu.Item>
                        <Menu.Item key="4" icon={<ExclamationCircleOutlined />} >
                            In arrivo
                        </Menu.Item>
                    </Menu>

                    <Layout>
                        <Button type="primary" shape="round" size={"Default"}>Logout</Button>
                    </Layout>

                </Sider>
                <Layout>       
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            sit amet consectetur adipisicing elit. Veritatis, a non! Libero, ea ratione et in eos quisquam consequuntur ipsa cupiditate? Quia velit impedit nostrum voluptatum, corrupti quasi modi odit!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, a non! Libero, ea ratione et in eos quisquam consequuntur ipsa cupiditate? Quia velit impedit nostrum voluptatum, corrupti quasi modi odit!
                        </div>
                    </Content>
                </Layout>
            </Layout> */}

            <Layout >
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => { console.log(broken) }}
                    onCollapse={(collapsed, type) => { console.log(collapsed, type) }}
                >Sider</Sider>
                <Layout>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            Content
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}
