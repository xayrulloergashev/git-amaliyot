import React from 'react';
import {
    LaptopOutlined,
    NotificationOutlined,
    UserOutlined,
} from '@ant-design/icons';
import Buttons from './components/button/index';
import Pagination from './components/pagination/index';
import {Layout, Menu, theme, Button, Tooltip, Watermark} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import Test1 from './components/Test';
import Card1 from './components/Test1';
import AnchorT from './components/Serch';
import Inp from './components/Serch';
import Forma from './components/Form';
import Progr from './components/Progr/indx';

import Cards from './components/card/index';
const {Header, Content, Sider} = Layout;
const items1 = ['5', '8', '4', '22', '8', '8'].map(item => ({
    item,
    label: `Hello ${item}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);
        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,
            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `test${subKey}`,
                };
            }),
        };
    },
);
const App = () => {
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    return (
        <Layout>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                <img src='../public/logo.svg' width={100} />
                <Menu
                    theme='light'
                    mode='horizontal'
                    defaultSelectedKeys={['2']}
                    items={items1}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                />
                <Button type='primary' size='large' icon={<SearchOutlined />}>
                    search
                </Button>
            </Header>
            <Layout style={{height: 'calc(100vh - 65px)'}}>
                <Sider
                    width={200}
                    style={{
                        background: colorBgContainer,
                    }}>
                    <Menu
                        mode='inline'
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={items2}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}>
                        <Cards />
                        Pagination1
                        <Pagination />
                        <br />
                        <Buttons />
                        <br />
                        <Test1 />
                        <Card1 />
                        <Inp />
                        <Forma />
                        <br />
                        <Watermark content='tEst'>
                            <div style={{height: 100}} />
                            <Progr />
                        </Watermark>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default App;
