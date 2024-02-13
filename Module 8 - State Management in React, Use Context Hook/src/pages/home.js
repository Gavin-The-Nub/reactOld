import { useContext } from "react";
import { AppContext } from "../App";

// pede mong ilagay sa let{username} yung laman ng state
export let Home = () => {
  let { username } = useContext(AppContext);
  return <h1>HOME PAGE and user is: {username} </h1>;
};
