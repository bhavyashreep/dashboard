import {  Layout } from "antd";
import React, { useState } from "react";

import MenuItems from "./MenuItems";
import HeaderContent from "./HeaderContent";

import "./style.scss";

export default function LayoutProvider(props) {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const SideBarStyle = {
    margin: "63px 0 0 0",
    padding: "15px 15px 55px 15px",
    overflowY: "auto",
    height: "100vh",
    position: "fixed",
    left: 0,
    zIndex: 998,
    flex: "0 0 280px",
    maxWidth: "280px",
    minWidth: "280px",
    width: "280px",
  };

  return (
    <div id="layoutProvider">
      <Layout>
        <Header
       
          className="header"
          style={{ position: "fixed", width: "100%", zIndex: "1000" }}
        >
          <HeaderContent collapsed={collapsed} setCollapsed={setCollapsed} />
        </Header>
        <Layout>
          <Sider collapsed={collapsed} className="sideBar" style={SideBarStyle}>
            <MenuItems />
          </Sider>
          <Content>{props.children}</Content>
          {/* <Footer>Footer</Footer> */}
        </Layout>
      </Layout>
    </div>
  );
}
