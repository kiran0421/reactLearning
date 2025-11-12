import React from "react";
import { createContext, useState } from "react";

const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Kiran", age: "35" });
  const updateUser = (newUser) => {
    setUser((prev) => ({ ...prev, ...newUser }));
  };
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
