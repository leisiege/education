import React from 'react'
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export default function Topics() {
  let match = useRouteMatch();
  return (
    <Layout>
      <Sider width={200} className="site-layout-background"
        style={{
          minHeight: 500
        }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: 'auto', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
            <Menu.Item key="1">
              <Link to={`${match.url}/components`}>components</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={`${match.url}/props-v-state`}>props-v-state</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 500
        }}
      >
        <Switch>
          <Route path={`${match.path}/:topicId`}>
            <Topic />
          </Route>
          <Route path={match.path}>
            <h3>Please select a topic.</h3>
          </Route>
        </Switch>
      </Content>
    </Layout>

  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}