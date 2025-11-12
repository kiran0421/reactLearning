import React from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
const UpdateUser = () => {
  const { user, updateUser } = useContext(UserContext);
  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => updateUser({ name: e.target.value })}
      />
      <input
        type="text"
        placeholder="age"
        onChange={(e) => updateUser({ age: e.target.value })}
      />
      <div>
        Updated User : {user.name} - {user.age}
      </div>
    </div>
  );
};

export default UpdateUser;
