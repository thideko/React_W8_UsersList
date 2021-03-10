import "./styles.css";
import React from "react";
import { usersData } from "./userData";
import { useState } from "react";
import UserItem from "./UserItem";

export default function UserList(props) {
  // const [isSelected, setIsSelected] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(1);

  // const selection = () => {
  //   isSelected((usersData = true));
  // };

  return (
    <div className="userPanel">
      <ul className="userList">
        {" "}
        {usersData.map((user, index) => {
          return (
            <li
              onClick={() => setSelectedUserId(user.id)}
              className={selectedUserId === user.id ? "selectedUser" : null}
            >
              {" "}
              {user.user_name}{" "}
            </li>
          );
        })}
      </ul>

      <UserItem selectedUser={usersData[selectedUserId - 1]} />
    </div>
  );
}
