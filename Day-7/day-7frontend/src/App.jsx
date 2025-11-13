import { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { UserProvider } from "./components/utils/UserContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserProvider>
        <LandingPage />
      </UserProvider>
    </>
  );
}

export default App;
