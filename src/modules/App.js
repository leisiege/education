import React from 'react'
import Home from './Home'
import About from './About'
import Topics from './Topic'
import English from './English'
import Chinese from './Chinese'
import Math from './Math'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css'
import { Typography } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Text,Title } = Typography;
export default function App() {
  return (
    <Router>
      <Layout>
        <Header className='header'>
          <Menu theme="dark" mode="horizontal" >
            <Menu.Item key="1"><Link to="/">主页</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/chinese">语文</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/math">数学</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/english">英语</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/topics">工具</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/about">关于</Link></Menu.Item>
          </Menu>
        </Header>
      </Layout>
      <Layout>
        <Content>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/chinese">
              <Chinese />
            </Route>
            <Route path="/math">
              <Math />
            </Route>
            <Route path="/english">
              <English />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
}

