import React from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
const UserProfile = () => {
  const { user } = useContext(UserContext);
  return <div>UserProfile : {user.name}</div>;
};

export default UserProfile;
