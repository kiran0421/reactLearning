import React from "react";
import { useUser } from "../utils/UserContext";
import "./common.css";

const LoggedInUser = () => {
  const { user, updateUser } = useUser();
  return (
    <div className="logged-in-user">
      <span>
        {user === "guest" ? "Hello!!" : ""} {user}{" "}
      </span>
      {user === "guest" ? (
        <button onClick={() => updateUser("admin")}>Login</button>
      ) : (
        <button onClick={() => updateUser("guest")}>Logout</button>
      )}
    </div>
  );
};

export default LoggedInUser;
