import React from "react";
import "../../pages/LandingPage.css";
const Leftmenu = ({ menuList, updateSelection }) => {
  return (
    <div className="lp-leftmenu">
      <div className="lp-leftmenu-items">
        {menuList.map((item, index) => (
          <li key={index} onClick={() => updateSelection(item)}>
            {item}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Leftmenu;
