import { useContext, useState } from "react";
import { GlobalContext } from "../App";

export const Contact = () => {
  const { username, setUsername } = useContext(GlobalContext);

  const [newUsername, setNewUsername] = useState("");

  return (
    <div>
      <h1> THIS IS THE CONTACT PAGE of {username}. </h1>
      <input
        type="text"
        value={newUsername} // Bind the value of the input
        onChange={(event) => {
          setNewUsername(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setUsername(newUsername);
        }}
      >Change User Name</button>
    </div>
  );
};
