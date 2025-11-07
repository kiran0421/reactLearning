import UserStatus from "./UserStatus";
import "./components.css";

const headerStyle = {
  backgroundColor: "#f8f9fa",
  padding: "10px 20px",
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid #e0e0e0",
};
const Headers = () => {
  return (
    <header className="header-container">
      <h1 className="header-logo">My Header</h1>
      <nav className="header-nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <UserStatus isLoggedIn={true} username="JohnDoe" />
    </header>
  );
};
export default Headers;
