import React from "react";
import Logo from "../common/Assets/Icons/logo.png";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import FeatherIcon from "feather-icons-react";
import { Badge } from "antd";


export default function HeaderContent(props) {
  return (
    <div className="headerStyle">
      <div>
        {React.createElement(
          props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: () => props.setCollapsed(!props.collapsed),
          }
        )}

        <img alt="icon" src={Logo} />
      </div>
      <div className="right">
      <FeatherIcon className="headerIcons" icon="search" />
      <Badge style={{marginRight:"14px"}} count={9}><FeatherIcon style={{marginRight:"13px"}} className="headerIcons"  icon="bell" /></Badge>
      

      <FeatherIcon className="headerIcons"  icon="shopping-cart" />
        <span className="username">bhavya@gmail.com</span>
        <Avatar size={44} icon={<UserOutlined />} />
      </div>
    </div>
  );
}
