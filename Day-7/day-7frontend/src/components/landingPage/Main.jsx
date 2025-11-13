import React, { useEffect, useState } from "react";
import { useUser } from "../utils/UserContext";
import Leftmenu from "./Leftmenu";
import MainContnent from "./MainContent";
import "../../pages/LandingPage.css";
const Main = () => {
  const { user } = useUser();
  const [menuSelection, setMenuSelection] = useState("Dashboard");
  const [menuList, updateMenuList] = useState([]);
  const updateMenuSelection = (newMenuSelection) => {
    setMenuSelection(newMenuSelection);
  };
  useEffect(() => {
    if (user === "admin") {
      updateMenuList([
        "Dashboard",
        "create a Batch",
        "Equipment Data",
        "Analytics",
        "Reports",
        "Persoanl Settings",
      ]);
    }
    if (user === "guest") {
      updateMenuList([]);
    }
  }, [user]);

  return (
    <div className="lp-main">
      {menuList.length > 0 && (
        <Leftmenu
          menuList={menuList}
          updateSelection={updateMenuSelection}
        ></Leftmenu>
      )}
      <MainContnent menuItem={menuSelection}></MainContnent>
    </div>
  );
};

export default Main;
