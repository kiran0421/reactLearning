import React from "react";
import "./common.css";
import Logo from "./Logo";
import Menu from "./Menu";
import LoggedInUser from "./LoggedInUser";
const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Menu />
      <LoggedInUser />
    </div>
  );
};

export default Header;
