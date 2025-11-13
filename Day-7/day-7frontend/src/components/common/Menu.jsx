import React from "react";
import "./common.css";
import { useUser } from "../utils/UserContext";

const Menu = () => {
  const { user } = useUser();
  const menuItems = ["Home", "About", "Contact", "Request for Demo"];
  const userMenuItems = [];
  const menu = menuItems.map((item, index) => (
    <a href="/" key={index}>
      {item}
    </a>
  ));
  const userMenu = (
    <div className="project-title">
      Digital Batch and Equipment Logging System (DBELS)
    </div>
  );
  return <div className="menu-items">{user === "guest" ? menu : userMenu}</div>;
};

export default Menu;
