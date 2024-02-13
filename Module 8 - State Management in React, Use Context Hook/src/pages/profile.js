import { ChangeProfile } from "../components/changeprofile";
import { useContext } from "react";
import { AppContext } from "../App";

export let Profile = () => {
  let { username } = useContext(AppContext);

  return (
    <div>
      PROFILE PAGE {username}
      <ChangeProfile />{" "}
    </div>
  );
};
