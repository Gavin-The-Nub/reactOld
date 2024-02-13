import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export let ChangeProfile = () => {
  let [newUsername, setNewUsername] = useState();
  let { setUsername } = useContext(AppContext);

  return (
    <div>
      <input
        onChange={(event) => {
          setNewUsername(event.target.value);
        }}
      />
      <button onClick={() => setUsername(newUsername)}>CHANGE USERNAME</button>
    </div>
  );
};
