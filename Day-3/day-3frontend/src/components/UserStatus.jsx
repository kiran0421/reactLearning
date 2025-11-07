import { TiBell } from "react-icons/ti";
const UserStatus = ({ isLoggedIn, username }) => {
  return (
    <div>
      <TiBell />
      {isLoggedIn && `Welcome, {username}!`}
      {!isLoggedIn && `Welcome, USER`}
    </div>
  );
};

export default UserStatus;
