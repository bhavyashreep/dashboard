import React from "react";
import { Menu } from "antd";
import { NavLink, Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

import { routes } from "../common/Routes";

const MenuItems = () => {
 



  return (
    <Menu>
    <Menu.Item
        key="dashboard"
        icon={
          <NavLink className="menuItem-icon" to={routes.DASHBOARD}>
            <FeatherIcon className="iconStyle"  icon="home" />
          </NavLink>
        }
      >
        <Link to={routes.DASHBOARD}>Dashboard</Link>
      </Menu.Item>
      <Menu.Item
        key="customers"
        icon={
          <NavLink className="menuItem-icon" to={routes.DASHBOARD}>
            <FeatherIcon className="iconStyle"icon="users" />
          </NavLink>
        }
      >
        <Link to={routes.DASHBOARD}>Customers</Link>
      </Menu.Item><Menu.Item
        key="pricing"
        icon={
          <NavLink className="menuItem-icon" to={routes.DASHBOARD}>
            <FeatherIcon className="iconStyle" icon="home" />
          </NavLink>
        }
      >
        <Link to={routes.DASHBOARD}>Pricing</Link>
      </Menu.Item><Menu.Item
        key="products"
        icon={
          <NavLink className="menuItem-icon" to={routes.DASHBOARD}>
            <FeatherIcon className="iconStyle" icon="shopping-cart" />
          </NavLink>
        }
      >
        <Link to={routes.DASHBOARD}>Prodcuts</Link>
      </Menu.Item><Menu.Item
        key="orders"
        icon={
          <NavLink className="menuItem-icon" to={routes.DASHBOARD}>
            <FeatherIcon className="iconStyle" icon="folder" />
          </NavLink>
        }
      >
        <Link to={routes.DASHBOARD}>Orders</Link>
      </Menu.Item>
    </Menu>
  );
};

export default MenuItems;
