import { createContext, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import { UserProvider } from "./components/UserContext";
import UserProfile from "./components/UserProfile";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <>
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>
    </>
  );
}

export default App;
