import { useContext, useState } from "react";
import React from "react";
const UserContext = React.createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = useState("guest");
  const updateUser = (newUser) => {
    setUser(newUser);
  };
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
const useUser = () => {
  const user = useContext(UserContext);
  if (!user) throw new Error("useUser must be used within a UserProvider");
  return user;
};
export { UserProvider, useUser };
