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

export default function App() {
  return (
    <Router>
      <div>
        <ul id="main-ul">
          <h1 id='main-header'>学习辅助软件</h1>
          <li>
            <Link to="/">主页</Link>
          </li>
          <li>
            <Link to="/chinese">语文</Link>
          </li>
          <li>
            <Link to="/math">数学</Link>
          </li>
          <li>
            <Link to="/english">英语</Link>
          </li>
          <li>
            <Link to="/topics">工具</Link>
          </li>
          <li>
            <Link to="/about">关于</Link>
          </li>
        </ul>

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
      </div>
    </Router>
  );
}

