import React from 'react';
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Buttons from './components/button/index';
import { Layout, Menu, theme, Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3', '4', '5', '6'].map(item => ({
  item,
  label: `TEST ${item}`,
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
          label: `option${subKey}`,
        };
      }),
    };
  },
);
const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}>
        <img
          src='../public/logo.svg'
          width={100}
          style={{ color: 'white' }}
        />
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['2']}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
        <Button type='primary' size='large' icon={<SearchOutlined />}>
          Bexruz Qidiruvda 😁😎
        </Button>
      </Header>
      <Layout style={{ height: 'calc(100vh - 65px)' }}>
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
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}>
            Hello world
            <Buttons />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;
