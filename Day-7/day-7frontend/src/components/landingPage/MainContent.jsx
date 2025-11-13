import React from "react";
import "../../pages/LandingPage.css";
import { useUser } from "../utils/UserContext";
const MainContent = ({ menuItem }) => {
  const { user } = useUser();
  console.log(menuItem);
  return (
    <div className="lp-main-content">
      {user === "guest" && (
        <button className="main-primary-button">Request for Demo</button>
      )}
      {user !== "guest" && menuItem === "Dashboard" && <h1>Dashboard</h1>}
      {user !== "guest" && menuItem === "create a Batch" && (
        <h1>create a Batch</h1>
      )}
      {user !== "guest" && menuItem === "Equipment Data" && (
        <h1>Equipment Data</h1>
      )}
    </div>
  );
};

export default MainContent;
